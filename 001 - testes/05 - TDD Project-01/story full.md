# Story: Renting a car

## Use Case 1
As a system user 
In order to get an available car in a specific category <br />
Given a car category containing 3 different cars<br />
When i check if there's a car available<br />
Then it should choose randomly a car from the category chosen 

## Use Case 2 
As a system user<br />
In order to calculate the final renting price<br />
Given a customer who wants to rent a car for 5 days<br />
And he is 50 years old <br />
When he chooses a car category that costs \$37.6 per day<br />
Then i must add the Tax of his age which is 30% to the car category price <br />
Then the final formula will be ((price per day * Tax) * number of day)<br />
And the final result will be ((37.6 * 1.3) * 5) = 244.4 <br />
And the final price will be printed in Brazillian Portuguese forma as "R$ 244,40"

## Use Case 3
As a system user <br />
In order to register a renting transaction<br />
Given a registered customer who is 50 years old<br />
And a car model that costs \$37.6 per day<br />
And a delivery date that is for 05 days behind <br />
And given an actual date 02/07/2022<br />
When i rent a car i should see the customer data<br />
And the car selected<br />
And the final price which will be R$ 244,40<br />
And DueDate which will be printed in Brazilian Portuguese format "02 de julho de 2022"

