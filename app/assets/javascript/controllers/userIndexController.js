angular.module('NoteWrangler')
    .controller('UserIndexController', [
        'User', '$scope', function(User, $scope) {
            $scope.users = User.query();
        }
    ]
);