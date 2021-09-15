
# Take-home exercise for frontend candidates at LiveVox

![enter image description here](https://i.imgur.com/R6yxbY4.png)

![medium](https://img.shields.io/badge/-Medium-yellow) ![time](https://img.shields.io/badge/%E2%8F%B0-3h-blue)

## Project

We would like you to build a payment module that helps our customers to complete the checkout process. Users interested in getting premium access to our existing app should be able to choose a plan, enter customer information, read terms and conditions, and select a payment (either credit card or paypal).  

The user should be able to go back and forth through the steps as shown in the XD prototype.

Users should have a phenomenal (if micro interactions are implemented) or decent (otherwise) user experience on desktop, tablet and mobile devices.

**XD mockups** don't include tablet and mobile views, so it's up to you to come up with a responsive solution for it.

## Requirements

We strongly encourage you to complete some of the requirements presented below:

### Landing view

- Use the following api response format to populate the user information presented on the right side corner of the app. Use any design mock api online tool. i.e. https://designer.mocky.io/design/confirmation

 ```json
 {
     role: 'user',
     name: 'Thomas Anderson',
     alias: (The One),
     avatarUrl: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-matrix-keanu-reeves.jpg,
     notifications: 1
}
```

### Choose plan view

- Use the following api response format to populate the choose plan view.

 ```json
 {
     featureList: [
			{
				description: '50 million songs and your entire EMC Music library',
				personalUse: true,
				familyUse: true,
			},
			{
				description: 'Listen online or off',
				personalUse: true,
				familyUse: true,
			},
			{
				description: 'Stream ad free music and music videos',
				personalUse: true,
				familyUse: true,
			},
			{
				description: 'Download songs to your library',
				personalUse: true,
				familyUse: true,
			},
			{
				description: 'Access across your devices',
				personalUse: true,
				familyUse: true,
			},
			{
				description: 'See what your friends are listening to',
				personalUse: true,
				familyUse: true,
			},
			{
				description: 'Original shows, concerts and exclusives',
				personalUse: true,
				familyUse: true,
			},
			{
				description: 'Beats 1 live and online radio shows',
				personalUse: true,
				familyUse: true,
			},
			{
				description: 'Access up to six people',
				personalUse: false,
				familyUse: true,
			},
			{
				description: 'A personal account to each family member',
				personalUse: false,
				familyUse: true,
			},
			{
				description: 'Sharing what you want, when you want - or not at all',
				personalUse: false,
				familyUse: true,
			},
			{
				description: 'Sharing of EMC Music Purchases',
				personalUse: false,
				familyUse: true,
			}
		],
		plansPrices: {
			personalUse: 1000,
			familyUse: 4500,
		}
}
```

### Customer information view

- Use material-ui/ant design or your preferred react UI library. Follow style guidelines so it looks like in the mockup.
- Phone number field should auto-format the number as the user types in. i.e. (415) 503-2934. If Outside the US toggle button is enabled, take into account international formatting.
- All fields are required, make sure there's validation in place.
- **BONUS:** To enhance the UX, enable autocomplete through Google Maps API to validate that the address provided is correct.

### EMC Music Authorization Information view

- Calculate taxes and display breakdown + total (as shown in the mock up) on the right side of the screen.
- **TIP:** Get taxes per state here https://worldpopulationreview.com/state-rankings/sales-tax-by-state
- If Outside the US field is enabled, tax should be 0.

### Payment Selection view

- Render data on the preview section (credit card place holder) as the user types in the form.
- Credit card style (logo) should change based on the credit card number dynamically. To determine the type of card use https://github.com/braintree/credit-card-type

## Other requirements

- Use either **Redux or Context API** to manage shared information across views.
- Use any CSS in JS library
- Use third party libraries as needed.
- Add some unit tests.

### Project Structure

Since this challenge aims to measure your abilities/experience with React + CSS in JS, we've included all of the boilerplate to get started with this project using [create-react-app](https://github.com/facebookincubator/create-react-app), feel free to use this structure if you'd like.

### Evaluation

The app should run on any computer by running `npm install` and `npm start`.
We’ll evaluate the exercise in a meeting that will be scheduled after you've delivered your solution to us.

### Notes

Please, don't open a PR against this repo. Just clone this repo and keep the solution on your local machine.

### Credits

XD mockups were originally downloaded from https://adobexdelements.com/

### Coding at LiveVox

At [LiveVox](https://www.livevox.com) we strive for writing simple, maintainable, atomic and clean code.
We have guidelines and follow best practices.
We prefer simplicity over complexity.
We really care about providing a good user experience and pleasant UI.