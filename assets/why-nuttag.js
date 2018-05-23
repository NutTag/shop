$(document).ready(function() 
{
  var $section = $('.shopify-section.bluetooth-why-nuttag-section');
  initWhyNutTagPage($section);
});

$(window).resize(function() {
  var $section = $('.shopify-section.bluetooth-why-nuttag-section');
  initWhyNutTagPage($section);
});

var initWhyNutTagPage = function($section)
{
  if ($section === undefined || $section.length === 0)
    $section = $(document);

  var $gridSection = $section.find('.bluetooth-why-nuttag');
  if ($gridSection.length)
  {
    var blockCount = $gridSection.find('.why-section').length;
    var visibleBlockCount = parseInt($gridSection.data('visible-block-count'));

    $gridSection.find('.why-section:gt(' + (visibleBlockCount-1) + ')').fadeOut();  
    if (blockCount >= visibleBlockCount)
    {
      $section.find('.why-btn-section').show();
    }

    //determine column count - hard-code breakpoints
    var columnCount = 3;
    var viewPortWidth = $(window).width();
    if (viewPortWidth < 530)
      columnCount = 2;
    
    if (visibleBlockCount <= columnCount)
    {
      $gridSection.find('.why-section').css('border-bottom', 'none');
    }
    else
    {      
      $gridSection.find('.why-section:gt(' + (visibleBlockCount-(columnCount+1)) + ')').css('border-bottom', 'none');
    }
  }

  $(document).off('click.whybtn-more').on('click.whybtn-more', '.why-btn-section a', function(e)
  {
    var $self = $(e.target);

    //determine column count - hard-code breakpoints
    var columnCount = 3;
    var viewPortWidth = $(window).width();
    if (viewPortWidth < 530)
      columnCount = 2;       

    $gridSection.find('.why-section').fadeIn().removeAttr('style');
    var blockCount = $gridSection.find('.why-section').length;
    if (blockCount % columnCount == 0)
    {
      $gridSection.find('.why-section:gt(' + (blockCount-(columnCount+1)) + ')').css('border-bottom', 'none');
    }
    else
    {
      var rem = blockCount % 3;
      $gridSection.find('.why-section:gt(' + (blockCount-(rem+1)) + ')').css('border-bottom', 'none');
    }
    $self.closest('.why-btn-section').hide();
    return false;
  });
}