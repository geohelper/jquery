(function($){
	
	$.fn.autolabel = function(settings){
		
		settings = $.extend({
			focus_class: 'focus',
			virgin_class: 'virgin'
		}, settings)
		
		this.each(function(){
			var $this = $(this);
			if($this.eq('input[type=text]')){
				var $label = $('label[for="' + $this.attr('id') + '"]');
				$label.hide();
				
				var virgin_value = $label.text();

				if(!$this.val() || $this.val() == ''){					
					$this.val(virgin_value).addClass(settings['virgin_class']);
				}
				
				$this
					.focus(function(e){
						if($this.val() == virgin_value) $this.val('').removeClass(settings['virgin_class']);
					})
					.blur(function(e){
						if($this.val() == '') $this.val(virgin_value).addClass(settings['virgin_class']);
					})
			}
		});
		
		return this;
		
	}
	
})(jQuery);

jQuery(document).ready(function(){
	jQuery('input.autolabel').autolabel();
});