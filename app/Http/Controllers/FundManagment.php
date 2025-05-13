<?php

namespace App\Http\Controllers;

use App\Models\AdManagerData;
use App\Models\BillManagement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class FundManagment extends Controller
{
    function index()
    {
        $data = BillManagement::with('adManager:user_id,app_id')->with('user:id,name,avatar')->get();;
        return Inertia::render('AdminPages/FundManagement', ['fundData'=>$data]);
    }

    function store(Request $request)
    {
        $UserID = $request->input('userID');
        $adManager = $request->input('adManager');

        // Retrieve the AdManagerData
        $adManagerData = AdManagerData::where(['id' => $UserID, 'ad_manager' => $adManager])->first();

        if ($adManagerData) {
            // Decode transaction history and last_7_transaction
            $transactionHistory = json_decode($adManagerData->transaction_history, true);
            $last7Transactions = json_decode($adManagerData->last_7_transaction, true) ?? [];

            // Determine color based on payment method
            $colorMap = ['bkash' => 'red', 'nagad' => 'blue', 'bank' => 'pink'];
            $color = $colorMap[$transactionHistory['method']] ?? 'gray'; // Default color if method not found

            // Create new transaction object
            $newTransaction = [
                'date'   => now()->toDateTimeString(),
                'amount' => $transactionHistory['amount'],
                'color'  => $color,
                'method' => $transactionHistory['method']
            ];

            // Prepend new transaction to the last 7 transactions
            array_unshift($last7Transactions, $newTransaction);

            // Ensure only 7 transactions are kept
            $last7Transactions = array_slice($last7Transactions, 0, 7);

            // Calculate new limit by adding the new amount
            $newLimit = $adManagerData->limit + $transactionHistory['amount'];

            // Update the database in one step
            $adManagerData->update([
                'limit' => $newLimit,
                'transaction_history' => json_encode([]), // Reset to empty array
                'last_7_transaction' => json_encode($last7Transactions),
                'latest_fund_request' => false
            ]);
            return Redirect::back()->with([
                'message' => 'Limit Extended Successfully with'.$adManager,
                'status' => 200
            ]);
        }


    }



}
