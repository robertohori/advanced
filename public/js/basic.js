var module = {
    link: 'https://api.unsplash.com/photos/?client_id=1329a0facc1c836fe18aeccae4dc898655c39d98f0a347e24f444d88a0d2a4e7',
    callJSON: function() {
      var _this = this;
      $.getJSON( this.link, function( data ) {
          var items = [];
        $.each( data, function( key, val ) {
        console.log(val)
        if (val.height<val.width)
         { items.push( '<div class="col-md-4">'+
                      '<div class="card mb-4 shadow-sm">'+
                        '<img class="card-img-top" src="'+val.urls.thumb +'" alt="">'+
                      ' <div class="card-body">'+
                        ' <p class="card-text"> '+_this.verify(val.user.name,'name')+'<br>'+_this.verify(val.user.bio,'bio')+' .</p>'+
                          '<div class="d-flex justify-content-between align-items-center">'+
                          ' <div class="btn-group">'+
                            ' <button type="button" class="btn btn-sm btn-outline-secondary"  data-toggle="modal" data-target="#exampleModal" onclick=module.openModal("'+val.urls.small+'","'+val.urls.full+'")>View</button>'+
                             _this.verify(val.user.instagram_username,'instagram')+
                            '</div>'+
                            '<small class="text-muted">'+val.likes+' likes</small>'+
                        ' </div>'+
                      ' </div>'+
                    ' </div>'+
                  ' </div>');}
  
          
                            
          });
        
          $( "<div/>", {
            "class": "row",
            html: items.join( "" )
          }).appendTo( "#album" );
        });
          },
  
        verify:function(val,type){
           if (type==='bio') {
              return val !== null ? ' Bio :' +val:" ";
            }else if (type==='name'){
              return val !== null ? ' This content was created by :' +val:" ";
            }else if(type==='instagram'){
                console.log(val)
                return val !==null ?  '<a class="btn btn-sm btn-outline-secondary" href="https://www.instagram.com/'+val+'" target="_blank">Portifolio</a>':" ";
            }
  
            return " "
        },
        openModal:function(small,full){
          $("#modal-body").html('<img src='+small+'>')
          $("#downloads").html('<a download="full" href="'+full+'" type="button" class="btn btn-primary" target"_blank" >Downloads</a>')
          
        }
        }