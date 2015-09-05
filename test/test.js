'use strict';

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var gutil = require('gulp-util');
var stripDebug = require('./../');

describe('# Testing strip debug', function() {
    it('Should strip debugger statements', function (cb) {
    	var stream = stripDebug({debugger: true});

    	stream.on('data', function (file) {
    		expect(file.contents.toString())
                .to.be.a("string")
                .to.equal('function test(){}');

    		cb();
    	});

    	stream.write(new gutil.File({
    		contents: new Buffer('function test(){debugger;}')
    	}));
    });
});
