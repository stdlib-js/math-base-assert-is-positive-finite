/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var isPositiveFinite = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isPositiveFinite instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPositiveFinite, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a positive finite number', opts, function test( t ) {
	t.equal( isPositiveFinite( 1.0 ), true, 'returns true' );
	t.equal( isPositiveFinite( 3.14 ), true, 'returns true' );
	t.equal( isPositiveFinite( 1.0e308 ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a negative number', opts, function test( t ) {
	t.equal( isPositiveFinite( -1.0 ), false, 'returns false' );
	t.equal( isPositiveFinite( -3.14 ), false, 'returns false' );
	t.equal( isPositiveFinite( -1.0e308 ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided +infinity or -infinity', opts, function test( t ) {
	t.equal( isPositiveFinite( PINF ), false, 'returns false' );
	t.equal( isPositiveFinite( NINF ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if provided `NaN`', opts, function test( t ) {
	t.equal( isPositiveFinite( NaN ), false, 'returns false' );
	t.end();
});
