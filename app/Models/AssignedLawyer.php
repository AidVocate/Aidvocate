<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssignedLawyer extends Model
{
    use HasFactory;

    protected $table = 'AssignedLawyer';

    protected $fillable = [
        'id',
        'Approved',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function cases()
    {
        return $this->hasMany(CaseModel::class, 'AssignedID');
    }
}
