class SMS:
    def __init__(self):
		# Set your app credentials
        self.username = "YOUR_USERNAME"
        self.api_key = "YOUR_API_KEY"

		# Initialize the SDK
        africastalking.initialize(self.username, self.api_key)

        # Get the SMS service
        self.sms = africastalking.SMS

    def fetch_sms_sync(self):
        # Our API will return 100 messages at a time back to you,
        # starting with what you currently believe is the lastReceivedId.
		# Specify 0 for the first time you access the method
        # and the ID of the last message we sent you on subsequent calls
        try:
            last_received_id = 0;
			# Fetch all messages using a loop
            while True:
                MessageData = self.sms.fetch_messages(last_received_id)
                messages = MessageData['SMSMessageData']['Messages']
                if len(messages) == 0:
                    print ('No sms messages in your inbox.')
                    break
                for message in messages:
                    print (message)
					  # Reassign the lastReceivedId
                    last_received_id = int(message['id'])