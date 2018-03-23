var yummy = {
    name: String = '#Yummy',
    createdOn: new Date('April 1, 2016'),
    createdBy: String = 'minus.plus.yummy',
    starred: Boolean = false,
    expiresln: Number = 100,    // minutes
    messageCount: Number = 999
};

var sevenContinents = {
    name: String = '#SevenContinents',
    createdOn: new Date('April 1, 2016'),
    createdBy: String = 'minus.plus.yummy',
    starred: Boolean = true,
    expiresln: Number = 100,    // minutes
    messageCount: Number = 999
};

var killerApp = {
    name: String = '#KillerApp',
    createdOn: new Date('April 1, 2016'),
    createdBy: String = 'minus.plus.yummy',
    starred: Boolean = false,
    expiresln: Number = 100,    // minutes
    messageCount: Number = 999
};

var firstPersonOnMars = {
    name: String = '#FirstPersonOnMars',
    createdOn: new Date('April 1, 2016'),
    createdBy: String = 'minus.plus.yummy',
    starred: Boolean = true,
    expiresln: Number = 100,    // minutes
    messageCount: Number = 999
};

var octoberfest = {
    name: String = '#Octoberfest',
    createdOn: new Date('April 1, 2016'),
    createdBy: String = 'minus.plus.yummy',
    starred: Boolean = false,
    expiresln: Number = 100,    // minutes
    messageCount: Number = 999
};

/**
 * list all channels
 */
function listChannels() {
    var yummy = createChannelElement("Yummy");
    $('ul').append(yummy);
    
    var sevenContinents = createChannelElement("SevenContinents");
    $('ul').append(sevenContinents);

    var killerApp = createChannelElement("KillerApp");
    $('ul').append(killerApp);
    
    var firstPersonOnMars = createChannelElement("FirstPersonOnMars");
    $('ul').append(firstPersonOnMars);
    
    var octoberfest = createChannelElement("Octoberfest");
    $('ul').append(octoberfest);
}

/*
 * create channel
 */
function createChannelElement(channelObject) {
    return(
        '<li onclick="switchChannel(' + channelObject + ')">' +
            '#' + channelObject +
            '<span class="channel-meta">' +
                '<i class="fa fa-star-o"></i>' +
                '<i class="fa fa-chevron-right"></i>' +
            '</span>' +
        '</li>' );
}