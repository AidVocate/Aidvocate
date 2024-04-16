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
        'CaseID',
        'Approved',
        'Case_Close',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

   public function case()
   {
    return $this->belongsTo(CaseModel::class);
   }
}
