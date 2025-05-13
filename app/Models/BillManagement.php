<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillManagement extends Model
{
    use HasFactory;
    protected $table = 'billings';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id','method','process','from','trxProof','trxID','amount','reason','paymentExecuteTime','merchantInvoiceNumber','statusCode','status','also'];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id')->select('id', 'name');
    }

    public function adManager()
    {
        return $this->belongsTo(AdManagerData::class, 'user_id', 'user_id');
    }
}
