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

Example-1: Llama2
L1. Amazon Bedrock > Examples > Llama2 Chat 70B - Chain of thoughts
L2. copy API request from example and create new file test.json and paste inside it
L3. Inside VS Code project dir create new file: llama2.py (imports, prompt, api-call to bedrock using boto3)
L4. Run file:
   $ python llama2.py   

Example-2: AI21 J2
C1. Amazon Bedrock > Examples > AI21 J2 mid v1
C2. copy API request from example and create new file test.json and paste inside it
C3. Inside VS Code project dir create new file: claude.py (imports, prompt, api-call to bedrock using boto3)
C4. Run file:
   $ python ai21.py   


Example-3: Stability-ai Stable diffusion
C1. Amazon Bedrock > Examples > Stability-ai Stable diffusion
C2. copy API request from example and create new file test.json and paste inside it
C3. Inside VS Code project dir create new file: sd-demo.py (imports, prompt, api-call to bedrock using boto3)
C4. Run file:
   $ python sd-demo.py  

Similar to this try other models.
