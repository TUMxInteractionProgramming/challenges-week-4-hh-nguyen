// current selected channel
var currentChannel = sevenContinents;

// my location
var currentLocation = {
    longitude:8.897485,
    latitude: 50.181142,
    what3words: "http://w3w.co/city.backpack.approve" 
};

/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channel) {
    //Log the channel switch
    console.log("Tuning in to channel", channel.name);

    currentChannel = channel;

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channel.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';

    /* #6 #liking channels on #click */
    /* original
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    */
    /* not worked!
    $('#channel-star').toggleClass('fa fa-star-o fa-lg');
    */
    /*
    $('#channel-star').removeClass('fa fa-star fa-lg');
    $('#channel-star').addClass('fa fa-star-o fa-lg');
    */
    showStar(channel.starred);
  
    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channel.name + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function toggleStar() {
    /* original
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
    */
    /* not worked!
    $('#channel-star').toggleClass("fa fa-star fa-lg");
    */
    /*
    $('#channel-star').removeClass('fa fa-star-o fa-lg');
    $('#channel-star').addClass('fa fa-star fa-lg');
    */
    currentChannel.starred = !currentChannel.starred;
    showStar(currentChannel.starred);
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}

/**
 * if 'starred' is true, display 'fa fa-star fa-lg'
 * else display 'fa fa-star-o fa-lg'
 */
function showStar(starred){
    var oldClass = 'fa ';
    var newClass = 'fa ';
    if (starred) {
        oldClass += 'fa-star-o';
        newClass += 'fa-star';
    } else {
        oldClass += 'fa-star';
        newClass += 'fa-star-o';
    }
    oldClass += ' fa-lg';
    newClass += ' fa-lg';
    $('#channel-star').removeClass(oldClass);
    $('#channel-star').addClass(newClass);
}