<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documento extends Model {
    
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['tramite_id', 'tipo_documento_id', 'nombre_archivo', 'autorizado'];

    /**
	 * The attributes that should be cast.
	 *
	 * @var array
	 */
	protected $casts = [
	    'autorizado' => 'bool'
	];

	# Relationships
    # -----------------
    /**
     * Obtener el trámite del documento actual.
     */
    public function tramite() {
        return $this->belongsTo(Tramite::class);
    }

    public function tipoDocumento() {
        return $this->belongsTo(TipoDocumento::class);
    }

}