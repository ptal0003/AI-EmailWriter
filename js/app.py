from flask import Flask, request
import openai
import os
import json
import requests
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Set up OpenAI API credentials
OPENAI_API_KEY = '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' #We need the key for OpenAI
openai.api_key = OPENAI_API_KEY

# Define a route for generating text
@app.route('/generate-text', methods=['GET','POST'])
def generate_text():
    # Get the prompt from the request data
    prompt = request.json['replyPrompt']
    email_context = request.json['emailContext']

    overall_message = prompt + " " + email_context

    # Set up the OpenAI API parameters
    model_engine = "gpt-3.5-turbo" #or "GPT-4"
    max_tokens = 1024 

    # Generate text using the OpenAI API
    messages=[{"role": "user", "content": overall_message}]
    #response_content = "Successful!!!!"
    

    response = openai.ChatCompletion.create(
        model= model_engine,
        max_tokens= max_tokens,
        temperature=0.7,
        messages = messages)


	# Get the generated text from the OpenAI API response
    response_content = response.choices[0]["message"]["content"].strip()
    response = {"body": response_content}
    return (response)




    #return jsonify(response_content)


if __name__ == '__main__':
    app.run(port=5500)
