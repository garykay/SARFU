		function showSuccessToast() {
			$().toastmessage('showSuccessToast',
					"Your song has been playlisted");
		}
		function showStickySuccessToast() {
				$().toastmessage('showToast', {
				text : '<i class="fa fa-thumbs-up"> Able to Play</i>',
				sticky : true,
				position : 'top-center',
				type : 'success',
				closeText : '',
				close : function() {
					resetage();
				}
			});

		}
		function showNoticeToast() {
			$().toastmessage('showNoticeToast',
					"Notice  Dialog which is fading away ...");
		}
		function showStickyNoticeToast() {
			$().toastmessage('showToast', {
				text : 'Notice Dialog which is sticky',
				sticky : true,
				position : 'top-center',
				type : 'notice',
				closeText : '',
				close : function() {
					resetage();
				}
			});
		}
		function showWarningToast() {
			$().toastmessage('showWarningToast',
					"Warning Dialog which is fading away ...");
		}
		function showStickyWarningToast() {
			$().toastmessage('showToast', {
				text : 'He is not able to play',
				sticky : true,
				position : 'top-center',
				type : 'warning',
				closeText : '',
				close : function() {
					resetage();
				}
			});
		}
		function showErrorToast() {
			$().toastmessage('showErrorToast',
					"Please insert a year of birth!");
		}
		function showStickyErrorToast() {
			$().toastmessage('showToast', {
				text : 'Please insert a year of birth!',
				sticky : true,
				position : 'top-center',
				type : 'error',
				closeText : '',
				close : function() {
					//resetage();
				}
			});
		}

		function reFresh() {

			setTimeout(function() {
				window.location.reload(1)
			}, 3000);
		}
