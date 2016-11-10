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
var str = "#######";
for (var i=1;i<=str.length;i++) {
    console.log(str.substr(0, i));
}