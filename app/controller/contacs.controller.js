app.controller('ContactController', function($scope, $http) {
    $scope.contact = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };

    // Theo dõi trạng thái form đã submit chưa
    $scope.submitted = false;

    // Kiểm tra email hợp lệ
    $scope.validateEmail = function(email) {
        var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    $scope.submitForm = function(contactForm) {
        $scope.submitted = true;
        
        // Kiểm tra form hợp lệ trước khi submit
        if (contactForm.$valid && $scope.validateEmail($scope.contact.email)) {
            var formData = new FormData();
            formData.append('name', $scope.contact.name);
            formData.append('email', $scope.contact.email);
            formData.append('subject', $scope.contact.subject);
            formData.append('message', $scope.contact.message);

            $http.post('https://script.google.com/macros/s/AKfycbzxWkPs4fCXmgXz-Xx3WKoRYqlkklmhh-qnozUpY0jpfODketcu4FBYsxp-428zvc9a2A/exec', formData, {
                headers: { 'Content-Type': undefined },
            }).then(function(response) {
                // Hiện modal xác nhận
                $('#confirmationModal').modal('show');
                // Reset form và trạng thái
                $scope.contact = {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                };
                $scope.submitted = false;
                contactForm.$setPristine();
                contactForm.$setUntouched();
            }).catch(function(error) {
                alert('Có lỗi xảy ra. Vui lòng thử lại.');
            });
        }
    };
});