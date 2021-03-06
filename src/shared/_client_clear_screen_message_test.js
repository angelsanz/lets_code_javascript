// Copyright (c) 2016 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
(function() {
	"use strict";

	var assert = require("_assert");
	var ClientClearScreenMessage = require("./client_clear_screen_message.js");
	var ServerClearScreenMessage = require("./server_clear_screen_message.js");

	describe("SHARED: ClientClearScreenMessage", function() {

		it("converts serializable objects to ClientClearScreenMessages and back", function() {
			var bareObject = {};
			var messageObject = new ClientClearScreenMessage();

			assert.deepEqual(ClientClearScreenMessage.fromPayload(bareObject), messageObject, "fromPayload()");
			assert.deepEqual(messageObject.payload(), bareObject, "payload()");
		});

		it("translates to ServerClearScreenMessage", function() {
			var expected = new ServerClearScreenMessage();
			var actual = new ClientClearScreenMessage().toServerMessage();

			assert.deepEqual(actual, expected);
		});

		it("instances know their network message name", function() {
			assert.equal(new ClientClearScreenMessage().name(), ClientClearScreenMessage.MESSAGE_NAME);
		});

	});

}());