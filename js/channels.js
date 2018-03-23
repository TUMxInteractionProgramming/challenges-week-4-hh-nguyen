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
    // build the name of the object
    var objName =  channelObject.name.slice(1);     // elminate #
    objName = objName.charAt(0).toLowerCase() + objName.slice(1);
    
    // build star type
    var star = "fa fa-star";
    if (!channelObject.starred) {
        star += "-o";
    }
    
    var boxStyle = 'style="background-color: #3F51B5; color: white; font-size: 16px; padding: 2px; margin: 0 4px; border-radius: 2px; text-align: center;"';
    
    return(
        '<li onclick="switchChannel(' + objName + ')">' +
            channelObject.name +
            '<span class="channel-meta">' +
                '<i class="' + star + '"></i>' +
                '<span ' + boxStyle + '>' + channelObject.expiresln + ' min' + '</span>' +
                '<span ' + boxStyle + '>' + channelObject.messageCount + ' new' + '</span>' +
                '<i class="fa fa-chevron-right"></i>' +
            '</span>' +
        '</li>' );
}