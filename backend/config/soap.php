<?php

return [

    'auth' => [
        'user' =>  env('USER_SOAP'),
        'password' => env('PASSWORD_SOAP')
    ],

    'client_paths' => [
    	'wsdl' => 'http://sistemas.opds.gba.gov.ar/ws/ws_opds_envases.php?wsdl'
    ],

];