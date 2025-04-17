<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdManagerData extends Model
{
    use HasFactory;
    protected $primaryKey = 'id';
    protected $fillable = ['ad_manager','app_id','limit','token_expired_on','access_token','user_id','transaction_history','latest_fund_request','last_7_transaction'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id')->select('id', 'name');
    }
}
