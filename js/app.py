from flask import Flask, request
import openai
import os
import json
import requests

app = Flask(__name__)

# Set up OpenAI API credentials
OPENAI_API_KEY = '' #We need the key for OpenAI
openai.api_key = OPENAI_API_KEY

# Define a route for generating text
@app.route('/generate-text', methods=['POST'])
def generate_text():
    # Get the prompt from the request data
    prompt = request.json['replyPrompt']
    email_context = request.json['emailContext']

    overall_message = prompt + " " + email_context

    # Set up the OpenAI API parameters
    model_engine = "GPT-3.5-turbo" #or "GPT-4"
    max_tokens = 1024 


    # Generate text using the OpenAI API
    #messages=[{"role": "user", "content": overall_message}]
    response_content = "Successful!!!!"
    return (response_content)


    response = openai.ChatCompletion.create(
        model= model_engine,
        max_tokens= max_tokens,
        temperature=0.7,
        messages = messages)


	# Get the generated text from the OpenAI API response
    response_content = response.choices[0]["message"]["content"].strip()




    #return jsonify(response_content)


if __name__ == '__main__':
    app.run(debug=True)
