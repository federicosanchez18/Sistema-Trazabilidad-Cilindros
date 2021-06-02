<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tramite extends Model {
    
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['establecimiento_id', 'tipo_tramite_id'];

    /**
	 * The attributes that should be cast.
	 *
	 * @var array
	 */
	protected $casts = [
	    'inicio' => 'datetime:d-m-Y',
	    'finalizacion' => 'datetime:d-m-Y'
	];

	# Relationships
    # -----------------
	/**
     * Obtener todos los documentos del trámite actual.
     */
    public function documentos() {
        return $this->hasMany(Documento::class);
    }

}