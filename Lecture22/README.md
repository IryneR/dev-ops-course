AWS Basics

1.1 Create a VPC

Go to VPC Dashboard → Your VPCs → Create VPC.

Fill in the details:
![Screenshot 2025-05-30 at 12.29.18.png](Screenshot%202025-05-30%20at%2012.29.18.png)
![Screenshot 2025-05-30 at 12.29.37.png](Screenshot%202025-05-30%20at%2012.29.37.png)

1.2.1 Create Public Subnet

Go to Subnets → Create Subnet.
Choose your VPC.
Fill in the details:
![Screenshot 2025-05-30 at 12.32.52.png](Screenshot%202025-05-30%20at%2012.32.52.png)


1.2.2 Create Private Subnet

Go to Subnets → Create Subnet.
Choose your VPC.
Fill in the details:
![Screenshot 2025-05-30 at 12.33.44.png](Screenshot%202025-05-30%20at%2012.33.44.png)

1.3.1 Create Internet Gateway (IGW)

Go to Internet Gateways → Create Internet Gateway.

Click Create Internet Gateway.

Click Actions → Attach to VPC → select your VPC.
![Screenshot 2025-05-30 at 12.35.45.png](Screenshot%202025-05-30%20at%2012.35.45.png)

1.4.1 Configure Route Table
Go to Route Tables → click Create Route Table.

Click Create.

Edit Routes:
Click into the route table → go to the Routes tab → click Edit routes.
![Screenshot 2025-05-30 at 12.40.08.png](Screenshot%202025-05-30%20at%2012.40.08.png)
![Screenshot 2025-05-30 at 12.42.09.png](Screenshot%202025-05-30%20at%2012.42.09.png)

1.4.2 Edit Subnet Associations:
Go to the Subnet associations tab → click Edit subnet associations.

Select your public-subnet.

Click Save associations.
![Screenshot 2025-05-30 at 12.45.19.png](Screenshot%202025-05-30%20at%2012.45.19.png)

2.1 Configure Security Groups and Network ACLs

Go to Security Groups → Create Security Group.
![Screenshot 2025-06-12 at 17.06.03.png](Screenshot%202025-06-12%20at%2017.06.03.png)
![Screenshot 2025-06-12 at 17.10.35.png](Screenshot%202025-06-12%20at%2017.10.35.png)

3.1 Launch EC2 Instance

Go to EC2 Dashboard → Instances → Launch Instance.

Select instance type:
t2.micro (free tier eligible)
![Screenshot 2025-06-12 at 17.31.12.png](Screenshot%202025-06-12%20at%2017.31.12.png)
![Screenshot 2025-06-12 at 17.37.14.png](Screenshot%202025-06-12%20at%2017.37.14.png)
Click Launch Instance.

4.1 Allocate Elastic IP (EIP)
Go to Elastic IPs → Allocate Elastic IP address → click Allocate.

Select the created IP → click Actions → Associate Elastic IP.
![Screenshot 2025-06-12 at 17.35.49.png](Screenshot%202025-06-12%20at%2017.35.49.png)
![Screenshot 2025-06-12 at 17.36.48.png](Screenshot%202025-06-12%20at%2017.36.48.png)
![Screenshot 2025-06-12 at 17.37.02.png](Screenshot%202025-06-12%20at%2017.37.02.png)
