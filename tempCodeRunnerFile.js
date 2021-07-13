
const letsHangOut = () => {
    let wantToBeFriends = Boolean;
    let likeToDrink = Boolean;
    let likeToEat = Boolean;
    let areAvailableThisWeekend = Boolean
    
    const available = [ wantToBeFriends, likeToDrink, likeToEat, areAvailableThisWeekend ]
    
    let yourName = input("Your name")
    let yourPartnersName = input("Your partner's name (if applicable)")
    let you = [yourName,yourPartnersName]
    
    const Saturday = {afternoon:[1,1.30,2,2.30,3,3.30,4,4.30], evening:[5,5.30,6,6.30,7,7.30,8,8.30,9,9.30,10,10.30,11,11.30]}
    const Sunday = {afternoon:[1,1.30,2,2.30,3,3.30,4,4.30], evening:[5,5.30,6,6.30,7,7.30,8,8.30,9,9.30,10,10.30,11,11.30]}
    let thisWeekend = [Saturday,Sunday]

    
    while(thisWeekend){
        if (you && (available[0] || available[1] || available[2] || available[3])){
            input(`Hell yeah I've been waiting for this! Count me in! I'm free on ${thisWeekend[day].timeOfDay[hour]}`)
        }

    }
}

letsHangOut()
