
$("#getBtn").click(function(){
//           $(this).replaceWith(
//        "<form style='' class='navbar-form navbar-left'>"+
//        "<div class='form-group'>"+
//         " <input type='text' class='form-control' style='width: 50%; margin: auto' placeholder='Search'>"+
//        "</div>"+
//        "<button type='submit' class='btn btn-default'>"+'Submit'+"</button>"+
//      "</form>")
        $('.overlay').show("slow");
        $('#getBtn').hide();
});
$("#submit").click(function(){
        $('.overlay').hide();
        $('#getBtn').show();
        var airport = $('.form-control').val();
        chrome.storage.sync.set({start:airport});
        chrome.storage.sync.get("start",function(data){
            console.log(data.start);
        })
        $('#airport').html(airport);
});
    $(function(){
        var list = ["LAX", "JFK", "LAS", "ORD", "SAN", "DCA", "MCO", "IAH", "SEA", "SAT", "MIA", "BOS", "ATL" ];
        $( ".form-control" ).autocomplete({
      source: list
    });
});

/*
function redoURL(){
    while(document.getElementById("a"+i)!=null)
        {
            
        }
    
}  */