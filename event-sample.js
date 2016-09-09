module.exports = {
  "session": {
    "application": {
      "applicationId": "TEST"
    },
    "user": {
      "userId": "Anonymous"
    }
  },
  "request": {
    "type": "IntentRequest",
    "intent": {
      "name": "GetTideIntent",
      "slots": {
        "City": {
          "name": "City",
          "value": "Boston"
        }
      }
    }
  }
}
