(function($){
    
  $.fn.externalLinks = function(){
    //find all a's and it they don't match our domain, open in new window
    $('a').click(function(event){
      var $this = $(this);
      if($this.isExternalLink() || $this.isDownloadLink())
        $this.attr('target', '_blank');
    });
  }
  
  $.fn.isDownloadLink = function(){
    var $this = $(this);
    if($this.is('a')){
      var href = $this.attr('href');
      if(!href.match(/(\/|\.html|\.htm|\.asp)$/)){
        return true;
      }
    }
    return false;
  }
  
  $.fn.isExternalLink = function(){
    var domain = document.location.host;
    var $this = $(this);
    if($this.is('a')){
      var href = $this.attr('href');
      if(href.match(/^https?:\/\//)){
        if(domain.indexOf('www.') == 0) domain = domain.substr(0,4);
        var regex = new RegExp("http:\/\/(www\.)?"+domain.replace(/\./,'\\.'));
        if(!regex.test(href)) return true;
      }
    }
    return false;
  }
})(jQuery);