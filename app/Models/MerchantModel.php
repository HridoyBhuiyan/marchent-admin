<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MerchantModel extends Model
{
    use HasFactory;
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $fillable = ['name',
        'email',
        'password',
        'type'];
    protected $hidden = ['password'];


    public function info()
    {
        return $this->hasOne(AdManagerData::class, 'user_id', 'id')->select('user_id', 'limit', 'current_spend' );

    }
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];





}
