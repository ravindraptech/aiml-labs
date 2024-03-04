# AWS Bedrock demo
1. Create AWS IAM User (attach policy and provide access)
2. User > Create Access key > CLI > Download
3. Configure on cmd/terminal:
   $ aws configure
   provide aws Access key ID:
   AWS secrete access key:
   Default region: us-east-1
   Default output format: json
Note: Make sure you have model access granted for the region you select. (Bedrock > Model Access > Manage Model Access Setting), Request for access if not granted
4. Amazon Bedrock > Examples > Llama2 Chat 70B - Chain of thoughts
5. copy API request from example and create new file test.json and paste inside it
6. Inside VS Code project dir create new file: llama2.py (imports, prompt, api-call to bedrock using boto3)
   
