angular.module('NoteWrangler')
    .controller('NoteShowController', [
        'Note', '$scope', '$routeParams', '$location', function(Note, $scope, $routeParams, $location) {
            $scope.note = Note.get({'id': $routeParams.id});
            $scope.isDeleting = false;
            
            $scope.deleteNote = function(note) {
                $scope.isDeleting = true;
                note.$remove().then(function() {
                    $scope.isDeleting = false;
                    $location.path('/notes');
                });
            }
        }
    ]
);