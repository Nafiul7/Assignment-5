const history = [];
const historyList = document.getElementById('history-list');
document.getElementById('donate-btn').addEventListener('click', function () {
    const donationAmount = document.getElementById('donation-amount-input');
    const balance = document.getElementById('balance').innerText;
    const noakhaliAmount = document.getElementById('noakhali-amount').innerText;
    const donationAmountParse = parseFloat(donationAmount.value);
    const balanceParse = parseFloat(balance);
    const noakhaliAmountParse = parseFloat(noakhaliAmount);

    if (isNaN(donationAmountParse) || donationAmountParse <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    if (donationAmountParse > balanceParse) {
        alert("Insufficient balance to make this donation.");
        return;
    }

    const newBalance = balanceParse - donationAmountParse;
    const noakhaliNewBalance = noakhaliAmountParse + donationAmountParse;
    document.getElementById('balance').innerText = newBalance.toFixed(2);
    document.getElementById('noakhali-amount').innerText = noakhaliNewBalance.toFixed(2);

    // history 

    addDonationHistory(donationAmountParse, " Flood at Noakhali, Bangladesh", new Date());

    donationAmount.value = '';
    showModal();
});

document.getElementById('donate-for-feni-btn').addEventListener('click', function () {
    const donationFeniAmount = document.getElementById('donate-for-feni');
    const balance = document.getElementById('balance').innerText;
    const feniAmount = document.getElementById('feni-amount').innerText;
    const donationFeniAmountParse = parseFloat(donationFeniAmount.value);
    const balanceParse = parseFloat(balance);
    const feniAmountParse = parseFloat(feniAmount);

    if (isNaN(donationFeniAmountParse) || donationFeniAmountParse <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    if (donationFeniAmountParse > balanceParse) {
        alert("Insufficient balance to make this donation.");
        return;
    }
    const newBalance = balanceParse - donationFeniAmountParse;
    const feniNewBalance = feniAmountParse + donationFeniAmountParse;
    document.getElementById('balance').innerText = newBalance.toFixed(2);
    document.getElementById('feni-amount').innerText = feniNewBalance.toFixed(2);

    // history 

    addDonationHistory(donationFeniAmountParse, " Flood Relief in Feni,Bangladesh", new Date());

    donationFeniAmount.value = ''
    showModal();
});

document.getElementById('donate-for-quota-btn').addEventListener('click', function () {
    const donationQuotaAmount = document.getElementById('donate-for-quota');
    const balance = document.getElementById('balance').innerText;
    const quotaAmount = document.getElementById('quota-amount').innerText;
    const donationQuotaAmountParse = parseFloat(donationQuotaAmount.value);
    const balanceParse = parseFloat(balance);
    const quotaAmountParse = parseFloat(quotaAmount);

    if (isNaN(donationQuotaAmountParse) || donationQuotaAmountParse <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    if (donationQuotaAmountParse > balanceParse) {
        alert("Insufficient balance to make this donation.");
        return;
    }
    const newBalance = balanceParse - donationQuotaAmountParse;
    const quotaNewBalance = quotaAmountParse + donationQuotaAmountParse;
    document.getElementById('balance').innerText = newBalance.toFixed(2);
    document.getElementById('quota-amount').innerText = quotaNewBalance.toFixed(2);
    // history 

    addDonationHistory(donationQuotaAmountParse, " Aid for Injured in the Quota Movement", new Date());

    donationQuotaAmount.value = ''
    showModal();
});


const historyButton = document.getElementById('history-btn');
historyButton.addEventListener('click', function () {
    historyButton.classList.add(
        'bg-[#d1c7f7]'
    )

    document.getElementById('donation-btn').classList.remove(
        'bg-[#d1c7f7]'
    )
    document.getElementById('donation-btn').classList.add(
        'rounded-lg',
        'border',
    )
    document.getElementById('hide').classList.add('hidden');
    document.getElementById('history-list').classList.remove('hidden');
    
})


const donationButton = document.getElementById('donation-btn');
donationButton.addEventListener('click', function () {
    donationButton.classList.add(
        'bg-[#d1c7f7]'
    )

    document.getElementById('history-btn').classList.remove('bg-[#d1c7f7]')
    document.getElementById('hide').classList.remove('hidden')
    document.getElementById('history-list').classList.add('hidden');
})

function addDonationHistory(amount, purpose, date) {
    history.push(amount);
    const el = document.createElement('div');
    el.classList.add("border", "p-6", "rounded-xl");
    el.innerHTML = '<p class="font-bold text-xl">' + amount + ' Tk' + ' Donate For' + purpose + '</p>' + '<p class="mt-3">' + 'Date : ' + date + '</p>';
    historyList.appendChild(el);
}

function showModal() {    
    document.getElementById('success-modal').classList.remove('hidden');
}
function closeModal() {    
    document.getElementById('success-modal').classList.add('hidden');
}