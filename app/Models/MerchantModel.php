<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class MerchantModel extends Model
{
    use HasFactory;
    use Searchable;
    protected $table = 'users';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';

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

    public function toSearchableArray()
    {
        return [
            'id' => (int) $this->id,
            'name' => $this->name,
            'email' => $this->email,
        ];
    }

    public function searchableAs()
    {
        return 'merchants_index';
    }


}
