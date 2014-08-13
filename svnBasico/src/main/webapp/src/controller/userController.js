    App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
            $('.datepicker').datepicker();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
            document.getElementById("nuevoId").innerHTML = "El usuario " + model.firstName + " " + 
            model.lastName + " nacio el " + model.bornDate;
        },
        cancel: function(){
            a = "No ha guardado la informacion del usuario" + Math.random();
            alert(a);
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        }
    });