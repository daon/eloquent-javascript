/* 
    Write a loop that makes seven calls to console.log to output the following triangle:
    
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

function triangle(triangleBase, action) {
    for (var i=1;i<=triangleBase.length;i++) {
        action(triangleBase.substr(0, i));
    }
}

triangle('#######', console.log);