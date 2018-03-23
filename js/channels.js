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
    $('ul').append(createChannelElement(yummy));
    $('ul').append(createChannelElement(sevenContinents));
    $('ul').append(createChannelElement(killerApp));
    $('ul').append(createChannelElement(firstPersonOnMars));
    $('ul').append(createChannelElement(octoberfest));
}

/*
 * create channel
 */
function createChannelElement(channelObject) {
    var objName =  channelObject.name.slice(1);     // elminate #
    objName = objName.charAt(0).toLowerCase() + objName.slice(1);
    return(
        '<li onclick="switchChannel(' + objName + ')">' +
            channelObject.name +
            '<span class="channel-meta">' +
                '<i class="fa fa-star-o"></i>' +
                '<i class="fa fa-chevron-right"></i>' +
            '</span>' +
        '</li>' );
}