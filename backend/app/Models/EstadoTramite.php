<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoTramite extends Model {
    
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['establecimiento_id', 'tramite_id', 'estado'];

	# Relationships
    # -----------------
	/**
     * Obtener el tramite del estado actual.
     */
    public function tramite() {
        return $this->belongsTo(Tramite::class);
    }

}