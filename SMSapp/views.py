# import self from
import africastalking
class SMS:
    def __init__(self):
        self.username = "Red-wings"
        self.api_key = "8aa33b77936ad87e942ebb4aba80175f2a87a4b0c94fefb44e4ab086c07c570d"
        # Initialize the SDK
        africastalking.initialize(self.username, self.api_key)
        # Get the SMS service
        self.sms = africastalking.SMS
    def send(self):
        recipients = ["+256787955445"]
        # Set your message
        message = "Hello Donor, Welcome to wanadamu, we are requesting you to donate blood at Kenyatta Hospital. Let us know of your availability.Thank you.";
        # Set your shortCode or senderId
        # sender = "4632"
        try:
            response = self.sms.send(message, recipients)  # type: ignore
            print (response)
        except Exception as e:
            print ('Encountered an error while sending: %s' % str(e))
if __name__ == '__main__':
     SMS().send()