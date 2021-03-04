export const FAQDetails = [
  {
    title: 'Adding money',
    data: [
      {
        subtitle: 'With bank transfer',
        data: [
          {
            question: 'How do I transfer money to my Revolut account from another bank account?',
            answer: `You can find local and international transfer details in the Home screen > Accounts tab of the app. Next, select the currency you would like to add to your Revolut account from the drop-down list and tap on '...' next to 'Send' and choose 'Details'.`,
          },
          {
            question: 'Will I be charged for an inbound transfer?',
            answer: 'Revolut does not charge a fee to add money to your account via bank transfer. However, it is important to watch out for third-party fees.',
          },
          {
            question: 'When will the money reach my Revolut account?',
            answer: 'Just like a regular bank account, your Revolut account balance will be updated once a transfer has reached your account.',
          },
          {
            question: 'Which currencies are supported for inbound transfers?',
            answer: 'You can transfer money to your accounts via bank transfer in the following 28 currencies: AED, AUD, BGN, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HRK, HUF, ILS, JPY, MXN, NOK, NZD, PLN, RUB, QAR, RON, SAR, SEK, SGD, THB, TRY, USD, ZAR',
          },
          {
            question: 'Which currencies are supported for inbound transfers?',
            answer: `We currently do not support transfers from the following countries: Afghanistan, Angola, Bosnia and Herzegovina, Burundi, Burkina Faso, Congo (Kinshasa), Central African Republic, Congo (Brazzaville) Côte d'Ivoire, Cuba, Algeria, Egypt, Eritrea, Ethiopia, Guinea, Guinea-Bissau, Guyana, Haiti, Iraq, Islamic Republic of Iran, Cambodia, Sri Lanka, Korea (North), Myanmar, Mozambique, Lao PDR, Lebanon, Liberia, Libya, Nigeria, Panama, Palestinian Territory, Pakistan, Sudan, Sierra Leone, Somalia, South Sudan, Serbia, Swaziland, Syria, Tajikistan, Timor-Leste, Trinidad and Tobago, Tunisia, United Republic of Tanzania, Uganda, Ukraine, Vanuatu, Venezuela (Bolivarian Republic), Yemen, Zimbabwe`,
          },
          {
            question: `What should I do if a transfer doesn't arrive to my Revolut account?`,
            answer: `Transfer timeframe mostly depends on the country, where the sender’s bank is located. UK local transfers can take up to 1 business day to reach your account. EUR transfers from Europe usually take 2 working days, while International Swift transfers may take up to 5 business days.`,
          },
          {
            question: `Why has the transfer to my account been reverted?`,
            answer: `Due to compliance reasons, we're unable to accept deposits by transfer from certain sources. This includes some cryptocurrency exchanges, certain countries, banks, and entities.`,
          },
        ]
      },
      {
        subtitle: 'With card',
        data: [
          {
            question: `Why has my card deposit been reverted?`,
            answer: `Currently, on card top-ups, we only have a reverted state for card authorisation. Sometimes, when a card is added, a small transaction is made to the card and instantly reverted to make sure the card will accept the transaction.`,
          },
          {
            question: `Why was I charged a fee for my deposit?`,
            answer: `If you add money with a card that was not issued within your home country, with a credit card, or with a commercial card, we may charge you a small fee to cover our costs. We will disclose this fee to you before you add any money.`,
          },
          {
            question: `Why has my card deposit failed?`,
            answer: `If your card top-up is not going through, as a first step, please make sure you are entering correct card details (expiration date, CVC, etc) and that your account has sufficient funds.`,
          },
          {
            question: `Card deposit failed due to issue with 3DS verification`,
            answer: `When you make a top-up, there could be a message from your card issuer bank asking you to authorize transaction. If verification fails, your bank can reject the deposit request.`,
          },
          {
            question: `My top-up by card failed but I was charged for it`,
            answer: `If a top-up failed, it may show as pending on your main bank’s side for up to 5 business days. We send the reversal to your card issuer instantly, so as soon as their system processes it, your balance should also be updated.`,
          },
        ]
      },
    ]
  },
  {
    title: 'Making payments',
    data: [
      {
        subtitle: 'Card issues',
        data: [
          {
            question: `I have not received my card`,
            answer: `For standard card deliveries, please proceed to the 'Cards' Tab and select the relevant card to view the estimated delivery date. If your card was sent via priority delivery, you will be able to track the card delivery. Simply proceed to the 'Cards' tab and select the relevant card to view the tracking information.`,
          },
          {
            question: `I did not receive my tracking number`,
            answer: `At present, we are unable to offer real-time tracking services for standard deliveries, however, an estimated delivery date will be displayed in the 'Cards' tab.`,
          },
          {
            question: `Why is my card not posted yet?`,
            answer: `As soon as you place your order, we generate your card details and begin making your card. The entire process usually takes up to one business day. Sometimes, however, we may encounter a delay in the personalisation process. This means your card may take an additional business day before it is ready to be shipped.`,
          },
          {
            question: `Where can I get my card delivered to?`,
            answer: `We can send a card to most countries in the world. Once you've selected the card of your choice, the estimated delivery date and cost for the delivery will be displayed. You can change the delivery address when ordering a card.`,
          },
          {
            question: `My physical card is not working`,
            answer: `If your physical card has been damaged or has worn out, you can order a replacement card. A small fee might apply and the estimated delivery date will be provided as soon as you confirm the order.`,
          },
          {
            question: `My disposable virtual card is not working`,
            answer: `If your disposable virtual card has been rejected by the merchant, please proceed with another card. Disposable virtual cards are suitable for one-time, online transactions. They should not be used for recurring card payments (e.g. subscriptions) or with merchants that require a pre-authorisation (e.g. car rentals).`,
          },
          {
            question: `I have exceeded all my PIN attempts!`,
            answer: `If you enter the PIN for your Revolut card incorrectly three times in a row, your card will be temporarily blocked to keep your card secure.
            You can view or unblock your PIN anytime in the app. Simply head to the 'Cards' Tab, select the relevant card and then tap on 'PIN & Security' to view your options.`,
          },
          {
            question: `I want to change my card PIN`,
            answer: `You can change your card PIN at any ATM that provides PIN services and accepts Visa or Mastercard. Please be aware that there are certain countries where ATMs do not support PIN change, including Belgium, Luxembourg, Austria, Germany, Spain, France, and Singapore.`,
          },
          {
            question: `What to do if my card has been lost or stolen?`,
            answer: `Please freeze the card immediately in the Cards tab within the app or our website and then select 'Report lost or stolen'. This will protect your money and you will then be able to order a replacement card right away. The estimated delivery date will be provided once you’ve placed the order and a small fee may apply.`,
          },
          {
            question: `I would like a refund for my card`,
            answer: `If there's been an issue with your card order and you believe you're eligible for a refund, please chat to us ("?" icon at the top right of your Profile page -> New chat).`,
          },
        ]
      },
      {
        subtitle: 'Paying by card',
        data: [
          {
            question: `Why has my card payment been declined?`,
            answer: `Some of the most common reasons resulting in your Revolut card being declined are: inputting incorrect card details (PIN, expiration date, or CVC), declines due to exceeding PIN/CVV tries, certain payment types (swipe, contactless) being disabled in your security settings, issues with 3DS verification for online payments, as well as transactions declined by our automated security system.`,
          },
          {
            question: `I would like a refund for something I bought`,
            answer: `If you have already tried to resolve the issue with the merchant but they refused to help, please fill out our online chargeback form for our team to help. We will need your proof of purchase and evidence of your attempt to contact the merchant to complete the chargeback process.`,
          },
          {
            question: `Am I eligible for Google Pay?`,
            answer: `Google Pay is available to users from Australia, Austria, Belgium, Bulgaria, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Japan, Latvia, Lithuania, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Spain, Singapore, Sweden, Switzerland, the U.S. and United Kingdom.`,
          },
          {
            question: `Am I eligible for Apple Pay?`,
            answer: `Apple Pay is currently only available for Revolut customers in the UK, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Lithuania, Malta, Norway, Poland, Portugal, Romania, Singapore, Slovakia, Slovenia, Spain, Sweden, Switzerland. We’ll be expanding to other countries soon.`,
          },
          {
            question: `Are my card details protected?`,
            answer: `Every time you pay using Apple Pay or Google Pay, your real card number isn’t sent to the merchant, which ensures your card details are kept safe and secure.`,
          },
        ]
      },
      {
        subtitle: 'Pay with Revolut',
        data: [
          {
            question: `How do I dispute a Pay with Revolut transaction?`,
            answer: `If you are dissatisfied with the product or service provided by the merchant, you can begin the process to dispute a transaction. To do this, please chat to us and state that you want to raise a Pay with Revolut claim.`,
          }
        ]
      },
      {
        subtitle: 'Paying via direct debit',
        data: [
          {
            question: `I don’t recognise a Direct Debit payment`,
            answer: `If you wish to dispute a EUR Direct Debit transaction, you have the right to request an immediate refund within 8 weeks from the date your account was debited. If the mandate relating to the EUR Direct Debit transaction has not been authorised by you, you can request a refund up to 13 months after the date your account was debited. If you want to do this, please chat to us.`,
          }
        ]
      },
      {
        subtitle: 'Paying by card',
        data: [
          {
            question: `I don't recognise a card payment`,
            answer: `If you're concerned that your card has been compromised, please freeze your card immediately in the app to prevent any unauthorised payments and check the following:
            Did you make payments to this merchant in the past?
            If you don't recognize the merchant’s name, please open the 'Transactions' list and search it there. This will show if there were any payments to this merchant in the past and should help you recall the merchant.
            Have you ever provided your card details to this merchant?
            If there were no previous payments to this merchant, try recalling if you ever provided your card details to them at any point.
            For example, you linked the card as a payment method on a website, but never bought anything. Please contact the merchant to clarify the matter, this charge could be a mistake on their end.
            Merchant's name and location might show differently
            Sometimes the merchant's name shown in-app may not resemble their actual brand name. Also, the location doesn't have to be the actual place where the payment was made - it's often the merchant's headquarters.
            The app shows only the information the merchant decided to provide. The details can be double-checked with a quick Google search.
            Was the card used online or with a physical terminal? 
            If you see that the card was used with a physical terminal and you have the card with you, the payment should have been done by you. Try recalling if you made a payment of a similar amount on that day.
            For online payments, it's worth checking if somebody from your family or friends could have used your card details.
            If you've made a payment with an offline POS terminal (such as on a flight or petrol station), it can occasionally take a few days or even weeks for these transactions to appear on your statement.
            A merchant can also send a so-called 'delayed' payment, if for some reason they had trouble processing the transaction for the first time. In this case, the original payment may be reverted, and a 'delayed' payment charged instead.
            If you still believe your card has been used fraudulently, please fill out our chargeback form so we can help with the issue.
            If your card was lost or stolen, please report it as lost or stolen on the app or our website.
            To dispute transactions made while the card was lost or stolen, please contact the local police and obtain a report before filling out our chargeback form. We'll need the police report to complete the chargeback process.`,
          }
        ]
      },
      {
        subtitle: 'Withdrawing cash',
        data: [
          {
            question: `How do I withdraw cash?`,
            answer: `You can withdraw cash from any cash machine in your home country or overseas that supports Visa or Mastercard, but please look out for any fees that are applied by some ATM operators.`,
          },
          {
            question: `Where can I find ATMs?`,
            answer: `You can find ATMs near you in the Revolut app. Simply go to Profile → Marketplace and tap on 'ATMs nearby'. This will display both a list and a map view of ATMs near your current location. Don't forget to have location services enabled.`,
          },
          {
            question: `What are the usage limits?`,
            answer: `Cash withdrawals from ATMs are limited to £3,000 or currency equivalent per 24 hours. You can only withdraw £200, £200, £400, and £800 (see our Fees page) at no cost on the Standard, Plus, Premium and Metal plans respectively every month. A 2% fair usage fee applies thereafter. You can check your remaining allowance any time under your current price plan in the 'Profile' section.`,
          },
          {
            question: `Will I be charged for cash withdrawal?`,
            answer: `Please select the country in which your Revolut user agreement was signed prior to using our FAQs, terms may differ depending on your region. Withdrawing cash with the Revolut multi-currency card is generally at no cost. However, to be sustainable we have to employ a fair usage policy. `,
          },
          {
            question: `Why was my cash withdrawal declined?`,
            answer: `Some of the most common reasons for this can be that you have insufficient funds, have entered the wrong card PIN, exceeded your set monthly spending limit, or accidentally frozen your card.`,
          },
        ]
      },
    ]
  },
  {
    title: 'My accounts',
    data: [
      {
        subtitle: 'Managing my account',
        data: [
          {
            question: `What happens if my balance goes negative?`,
            answer: `In some instances, offline transactions or Revolut fees for services such as Premium and Device Insurance can lead to your balance dropping below zero.
            According to Revolut’s Terms & Conditions, if for any reason you have a negative balance, you agree to immediately add the required amount to correct the negative balance.
            Revolut will notify you following a negative balance, and allow you up to 7 business days to add money. After that, Revolut will attempt to correct the balance automatically by exchanging funds between accounts or adding money from your registered card.
            Add money automatically to keep your balance positive!`,
          },
          {
            question: `Viewing my account statements`,
            answer: `This is super easy. Go to the 'Accounts' section of the app, select '...' to see more and click on 'Statement'.
            Select the date range and file format (PDF or Excel) of your statement. Next, tap 'Get statement' and you will be able to see your account history on your screen.
            If you would like to download your statement, simply tap the export icon in the top-right corner of the screen and you can download it to your phone.`,
          },
          {
            question: `How can I control my spending with the budgeting feature?`,
            answer: `With Revolut’s built-in budgeting, you’ll be able to keep track of your spending by setting up a budget for each currency account you have.
            Just tell us how much you want to spend each month and we’ll work out a daily spending limit you can stick to to meet your goals. With instant updates, you’ll know exactly how much you have left to spend, when you’re nearing your daily limit, or when you’ve overspent. Just head to the 'Analytics' section (the graph icon in the top-right corner of the Home tab), tap on 'Budget', choose the currency, and tap ‘Set your budget’ to get started!`,
          },
        ]
      },
      {
        subtitle: 'Exchanging money',
        data: [
          {
            question: `How do I exchange money?`,
            answer: `You can exchange between AED, AUD, BGN, CAD, CHF, CZK, DKK, EUR, GBP, HKD, HRK, HUF, ILS, ISK, JPY, MAD, MXN, NOK, NZD, PLN, QAR, RON, RSD, RUB, SAR, SEK, SGD, THB, TRY, USD, ZAR on your Accounts tab, by clicking '...' (next to 'Add money') and then 'Exchange'. `,
          },
          {
            question: `How do I exchange money automatically?`,
            answer: `To exchange money and cryptocurrencies automatically you can use Limit or Stop Orders.
            A Stop Order is an order to buy or sell once the price of the asset reaches a specified price, known as the stop price. When the Stop Price is reached, a Stop Order becomes a Market Order and is executed at the best available price (which can be lower or higher than the Stop Price).`,
          },
          {
            question: `Managing currency orders`,
            answer: `A currency order can be created from the Accounts tab, by clicking '...' (next to 'Add money') and then choosing 'Exchange'.
            Alternatively from the star Icon on the top right of the Home and the Wealth tab, opening the Favourites screen, then choosing Orders, and tapping on Add New.`,
          },
        ]
      },
      {
        subtitle: 'Linked accounts',
        data: [
          {
            question: `What are linked bank accounts?`,
            answer: `Once you link your account, you will be able to see your other balances, transaction history and account details, all within the Revolut app.
            In addition, our analytics and budgeting tools for your linked accounts work automatically. You should see the app starting to track your spending as soon as you're linked. Setting a budget works the same way, too. Simply tap on Analytics, then select 'Set a budget'.`,
          },
          {
            question: `Which banks can I link to my Revolut app?`,
            answer: `We support current accounts from the following banks:
            NatWest,
            Halifax,
            Lloyds,
            Nationwide,
            Barclays,
            HSBC,
            First Direct,
            Santander,
            TSB,
            RBS,
            Starling Bank,
            Monzo,
            Bank of Scotland,
            M&S,
            Ulster,
            Danske.
            We also support savings and credit accounts for most of these banks.
            We're working hard to cover more account types very soon.`,
          },
          {
            question: `How will Revolut use the information from my linked account?`,
            answer: `All your bank information is just for you to use. We will use the data you share to keep you informed about your money while using the Revolut app. For example, if our analytics pick up that you're paying more than you need to for something, we'll try to let you know. In addition, all the details that we receive from your linked account are securely stored and encrypted. Your security is our priority.`,
          },
          {
            question: `Can I request an instant transfer?`,
            answer: `We currently don't support instant transfers through ACH.`,
          },
          {
            question: `Are the details of my linked account protected?`,
            answer: `We use TrueLayer to connect your Revolut app to your linked accounts. TrueLayer are regulated by the FCA (Financial Conduct Authority) and act as a messenger between Revolut and your other account providers.
            All of your details will always be encrypted and protected by high levels of security.`,
          },
        ]
      },
    ]
  },
  {
    title: 'Profile Plan',
    data: [
      {
        subtitle: 'Profile Settings',
        data: [
          {
            question: `I forgot my passcode`,
            answer: `If you have forgotten your passcode to access the Revolut app, tap on ‘Forgot?’ in the login page of the app and follow the simple instructions to reset your passcode.
            To be able to reset your passcode, your mobile phone number registered to your account needs to be in use and active. If you have since changed your mobile phone number, but have not updated it in your account, please contact us to do so.`,
          },
          {
            question: `Why is my account locked?`,
            answer: `
            We know that it can be frustrating to be denied access to your funds. Rest assured that we are doing everything in our power to finish the required checks and reinstate your account as soon as possible. Unfortunately, there is no specific timeframe that we can provide, the length of an investigation varies on a case to case basis.`,
          },
          {
            question: `I need to edit my personal details`,
            answer: `If you’re unable to access your app and need to update your mobile phone number, please chat to us.`,
          },
        ]
      },
    ]
  },
]

export const convertedFAQDetails = []
FAQDetails.map(faq => {
  faq.data.map(subFaq => {
    subFaq.data.map(detail => {
      const newDetail = {
        title: faq.title,
        subtitle: subFaq.subtitle,
        question: detail.question,
        answer: detail.answer,
      }
      convertedFAQDetails.push(newDetail)
      return ''
    })
    return ''
  })
  return ''
})