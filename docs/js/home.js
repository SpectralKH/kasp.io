"use strict";

// YouTube API
function start() {
	gapi.client.init({
		"apiKey": "AIzaSyBnQnpboWUfWyR8aW6HuQV5MAlxZ5FQ090",
		"discoveryDocs": ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
	}).then(function () {

		// SYNCTAN
		// API request details
		var requestSynctan = gapi.client.youtube.playlistItems.list({
			part: "snippet",
			playlistId: "UUoMimPRPeR28TM3_0cinjVQ",
			maxResults: 8
		});
		// Perform API request, process response
		requestSynctan.execute(function (response) {
			var nthChild,
			    arrayLength = response.result.items.length;
			for (var i = 0; i < arrayLength; i++) {
				nthChild = i + 1;
				$("section.synctan .item:nth-child(" + nthChild + ")").attr("href", "https://www.youtube.com/watch?v=" + response.result.items[i].snippet.resourceId.videoId);
				$("section.synctan .item:nth-child(" + nthChild + ") div.img").attr("style", 'background-image: url("' + response.result.items[i].snippet.thumbnails.high.url + '")').siblings(".title").html(response.result.items[i].snippet.title);
			}
		});

		// TRAP UNITED
		// API request details
		var requestTrapUnited = gapi.client.youtube.search.list({
			part: "snippet",
			channelId: "UC0kHs8aHGQEtQODjt9XHjfQ",
			type: "video",
			publishedBefore: "2017-05-14T00:00:00Z",
			order: "date",
			maxResults: 8
		});
		// Perform API request, process response
		requestTrapUnited.execute(function (response) {
			var nthChild,
			    arrayLength = response.result.items.length;
			for (var i = 0; i < arrayLength; i++) {
				nthChild = i + 1;
				$("section.trap-united .item:nth-child(" + nthChild + ")").attr("href", "https://www.youtube.com/watch?v=" + response.result.items[i].id.videoId);
				$("section.trap-united .item:nth-child(" + nthChild + ") div.img").attr("style", 'background-image: url("' + response.result.items[i].snippet.thumbnails.high.url + '")').siblings(".title").html(response.result.items[i].snippet.title);
			}
		});

		// VIDEO (personal)
		// API request details
		var requestVideo = gapi.client.youtube.playlistItems.list({
			part: "snippet",
			playlistId: "UUy6jcAF6fZGttRvihyQixbA",
			maxResults: 8
		});
		var requestCommissions = gapi.client.youtube.playlistItems.list({
			part: "snippet",
			playlistId: "PL84-DNDSU8p5WP6jA7hvOCV9dIKBNjdCS",
			maxResults: 8
		});
		// Perform API request, process response
		var videoResponse, commissionResponse;
		requestVideo.execute(function (response) {
			videoResponse = response;
			processResponses();
		});
		requestCommissions.execute(function (response) {
			commissionResponse = response;
			processResponses();
		});
		function processResponses() {
			if (videoResponse && commissionResponse) {
				// combine video and commission responses
				resultItems = videoResponse.result.items.concat(commissionResponse.result.items);
				resultItems.sort(function (a, b) {
					var dateA = new Date(a.snippet.publishedAt);
					var dateB = new Date(b.snippet.publishedAt);
					return dateB - dateA; // sort by date ascending
				});
				resultItems = resultItems.splice(0, 8);
				// insert into page
				var nthChild;
				for (var i = 0; i < resultItems.length; i++) {
					nthChild = i + 1;
					$("section.video .item:nth-child(" + nthChild + ") div.img").attr("style", 'background-image: url("' + resultItems[i].snippet.thumbnails.high.url + '")').siblings(".title").html(resultItems[i].snippet.title).parent().attr("href", "https://www.youtube.com/watch?v=" + resultItems[i].snippet.resourceId.videoId);
				}
			}
		}
	});
}
gapi.load("client", start);

// SoundCloud API
SC.initialize({
	client_id: "6ibYZTmF5qnpvp88S9V3werVrC18WCdC" //change
});
SC.get("/users/247370320/tracks", { limit: 8 }).then(function (tracks) {
	for (var i = 0; i < tracks.length; i++) {
		nthChild = i + 1;
		// coverSrc = JSON.stringify(tracks[i].artwork_url.replace("large", "t300x300"));
		$("section.lacuna .item:nth-child(" + nthChild + ") div.img").attr("style", 'background-image: url("' + tracks[i].artwork_url.replace("large", "t300x300") + '")').parent().attr("href", tracks[i].permalink_url);
	}
});

// Responsive YT thumbnails/SC covers
function resizeStuff() {
	var newHeight = $("section.adjust-height .item").width() / 16 * 9;
	$("section.adjust-height .item").css("height", newHeight + "px");

	var newHeight = $("section:not(.adjust-height) .item").width();
	$("section:not(.adjust-height) .item").css("height", newHeight + "px");
}
resizeStuff();
$(window).resize(resizeStuff);

// Image hover overlap/z-index fix
var high = 3;
$(".item").hover(function () {
	$(this).css({ "z-index": high });
	high++;
});

// Chevron scroller
var spacerHeight;
$(".chevron").on("click", function () {
	spacerHeight = $(".spacer").height();
	console.log(spacerHeight);
	window.scroll({ top: spacerHeight, left: 0, behavior: "smooth" });
});

// Discord link popup
$("body").on("click", function (e) {
	// Stop if input field was clicked
	if (!$(e.target).hasClass("popup-input")) {
		// If icon was clicked
		if ($(e.target).hasClass("discord")) {
			// Select text if hidden
			if ($(e.target).children(".popup").hasClass("hidden")) {
				$(e.target).children(".popup").children("input").select();
			}
			// Toggle visibility
			$(e.target).children(".popup").toggleClass("hidden");
		}
		// If hidden and icon was not clicked
		if (!$(".discord .popup").hasClass("hidden") && !$(e.target).hasClass("discord")) {
			// Hide
			$(".discord .popup").addClass("hidden");
		}
	}
});
// Email link popup
$("body").on("click", function (e) {
	// Stop if input field was clicked
	if (!$(e.target).hasClass("popup-input")) {
		// If icon was clicked
		if ($(e.target).hasClass("email")) {
			// Select text if hidden
			if ($(e.target).children(".popup").hasClass("hidden")) {
				$(e.target).children(".popup").children("input").select();
			}
			// Toggle visibility
			$(e.target).children(".popup").toggleClass("hidden");
		}
		// If hidden and icon was not clicked
		if (!$(".email .popup").hasClass("hidden") && !$(e.target).hasClass("email")) {
			// Hide
			$(".email .popup").addClass("hidden");
		}
	}
});

// Social media links anchor
function smlAnchor() {
	var sml = $(".personal-links"); // social media links
	var sasml = $(".spacer").height() - sml.height(); // space above social media links
	if (sasml < window.pageYOffset) sml.css("position", "fixed").css("top", "0px");else sml.css("position", "").css("top", "");
}
$(window).scroll(smlAnchor);
$(window).resize(smlAnchor);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2hvbWUuanMiXSwibmFtZXMiOlsic3RhcnQiLCJnYXBpIiwiY2xpZW50IiwiaW5pdCIsInRoZW4iLCJyZXF1ZXN0U3luY3RhbiIsInlvdXR1YmUiLCJwbGF5bGlzdEl0ZW1zIiwibGlzdCIsInBhcnQiLCJwbGF5bGlzdElkIiwibWF4UmVzdWx0cyIsImV4ZWN1dGUiLCJyZXNwb25zZSIsIm50aENoaWxkIiwiYXJyYXlMZW5ndGgiLCJyZXN1bHQiLCJpdGVtcyIsImxlbmd0aCIsImkiLCIkIiwiYXR0ciIsInNuaXBwZXQiLCJyZXNvdXJjZUlkIiwidmlkZW9JZCIsInRodW1ibmFpbHMiLCJoaWdoIiwidXJsIiwic2libGluZ3MiLCJodG1sIiwidGl0bGUiLCJyZXF1ZXN0VHJhcFVuaXRlZCIsInNlYXJjaCIsImNoYW5uZWxJZCIsInR5cGUiLCJwdWJsaXNoZWRCZWZvcmUiLCJvcmRlciIsImlkIiwicmVxdWVzdFZpZGVvIiwicmVxdWVzdENvbW1pc3Npb25zIiwidmlkZW9SZXNwb25zZSIsImNvbW1pc3Npb25SZXNwb25zZSIsInByb2Nlc3NSZXNwb25zZXMiLCJyZXN1bHRJdGVtcyIsImNvbmNhdCIsInNvcnQiLCJhIiwiYiIsImRhdGVBIiwiRGF0ZSIsInB1Ymxpc2hlZEF0IiwiZGF0ZUIiLCJzcGxpY2UiLCJwYXJlbnQiLCJsb2FkIiwiU0MiLCJpbml0aWFsaXplIiwiY2xpZW50X2lkIiwiZ2V0IiwibGltaXQiLCJ0cmFja3MiLCJhcnR3b3JrX3VybCIsInJlcGxhY2UiLCJwZXJtYWxpbmtfdXJsIiwicmVzaXplU3R1ZmYiLCJuZXdIZWlnaHQiLCJ3aWR0aCIsImNzcyIsIndpbmRvdyIsInJlc2l6ZSIsImhvdmVyIiwic3BhY2VySGVpZ2h0Iiwib24iLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiZSIsInRhcmdldCIsImhhc0NsYXNzIiwiY2hpbGRyZW4iLCJzZWxlY3QiLCJ0b2dnbGVD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L2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBZb3VUdWJlIEFQSVxuZnVuY3Rpb24gc3RhcnQoKSB7XG5cdGdhcGkuY2xpZW50LmluaXQoe1xuXHRcdFwiYXBpS2V5XCI6IFwiQUl6YVN5Qm5RbnBib1dVZld5UjhhVzZIdVFWNU1BbHhaNUZRMDkwXCIsXG5cdFx0XCJkaXNjb3ZlcnlEb2NzXCI6IFtcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL3lvdXR1YmUvdjMvcmVzdFwiXVxuXHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gU1lOQ1RBTlxuXHRcdC8vIEFQSSByZXF1ZXN0IGRldGFpbHNcblx0XHR2YXIgcmVxdWVzdFN5bmN0YW4gPSBnYXBpLmNsaWVudC55b3V0dWJlLnBsYXlsaXN0SXRlbXMubGlzdCh7XG5cdFx0XHRwYXJ0OiBcInNuaXBwZXRcIixcblx0XHRcdHBsYXlsaXN0SWQ6IFwiVVVvTWltUFJQZVIyOFRNM18wY2lualZRXCIsXG5cdFx0XHRtYXhSZXN1bHRzOiA4XG5cdFx0fSk7XG5cdFx0Ly8gUGVyZm9ybSBBUEkgcmVxdWVzdCwgcHJvY2VzcyByZXNwb25zZVxuXHRcdHJlcXVlc3RTeW5jdGFuLmV4ZWN1dGUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdHZhciBudGhDaGlsZCwgYXJyYXlMZW5ndGggPSByZXNwb25zZS5yZXN1bHQuaXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheUxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG50aENoaWxkID0gaSsxO1xuXHRcdFx0XHQkKFwic2VjdGlvbi5zeW5jdGFuIC5pdGVtOm50aC1jaGlsZChcIitudGhDaGlsZCtcIilcIilcblx0XHRcdFx0XHQuYXR0cihcImhyZWZcIiwgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVwiK3Jlc3BvbnNlLnJlc3VsdC5pdGVtc1tpXS5zbmlwcGV0LnJlc291cmNlSWQudmlkZW9JZCk7XG5cdFx0XHRcdCQoXCJzZWN0aW9uLnN5bmN0YW4gLml0ZW06bnRoLWNoaWxkKFwiK250aENoaWxkK1wiKSBkaXYuaW1nXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJzdHlsZVwiLCAnYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJytyZXNwb25zZS5yZXN1bHQuaXRlbXNbaV0uc25pcHBldC50aHVtYm5haWxzLmhpZ2gudXJsKydcIiknKVxuXHRcdFx0XHRcdC5zaWJsaW5ncyhcIi50aXRsZVwiKS5odG1sKHJlc3BvbnNlLnJlc3VsdC5pdGVtc1tpXS5zbmlwcGV0LnRpdGxlKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIFRSQVAgVU5JVEVEXG5cdFx0Ly8gQVBJIHJlcXVlc3QgZGV0YWlsc1xuXHRcdHZhciByZXF1ZXN0VHJhcFVuaXRlZCA9IGdhcGkuY2xpZW50LnlvdXR1YmUuc2VhcmNoLmxpc3Qoe1xuXHRcdFx0cGFydDogXCJzbmlwcGV0XCIsXG4gICAgICAgICAgICBjaGFubmVsSWQ6IFwiVUMwa0hzOGFIR1FFdFFPRGp0OVhIamZRXCIsXG4gICAgICAgICAgICB0eXBlOiBcInZpZGVvXCIsXG4gICAgICAgICAgICBwdWJsaXNoZWRCZWZvcmU6IFwiMjAxNy0wNS0xNFQwMDowMDowMFpcIixcbiAgICAgICAgICAgIG9yZGVyOiBcImRhdGVcIixcblx0XHRcdG1heFJlc3VsdHM6IDgsXG5cdFx0fSk7XG5cdFx0Ly8gUGVyZm9ybSBBUEkgcmVxdWVzdCwgcHJvY2VzcyByZXNwb25zZVxuXHRcdHJlcXVlc3RUcmFwVW5pdGVkLmV4ZWN1dGUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdHZhciBudGhDaGlsZCwgYXJyYXlMZW5ndGggPSByZXNwb25zZS5yZXN1bHQuaXRlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheUxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG50aENoaWxkID0gaSsxO1xuXHRcdFx0XHQkKFwic2VjdGlvbi50cmFwLXVuaXRlZCAuaXRlbTpudGgtY2hpbGQoXCIrbnRoQ2hpbGQrXCIpXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1cIityZXNwb25zZS5yZXN1bHQuaXRlbXNbaV0uaWQudmlkZW9JZCk7XG5cdFx0XHRcdCQoXCJzZWN0aW9uLnRyYXAtdW5pdGVkIC5pdGVtOm50aC1jaGlsZChcIitudGhDaGlsZCtcIikgZGl2LmltZ1wiKVxuXHRcdFx0XHRcdC5hdHRyKFwic3R5bGVcIiwgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicrcmVzcG9uc2UucmVzdWx0Lml0ZW1zW2ldLnNuaXBwZXQudGh1bWJuYWlscy5oaWdoLnVybCsnXCIpJylcblx0XHRcdFx0XHQuc2libGluZ3MoXCIudGl0bGVcIikuaHRtbChyZXNwb25zZS5yZXN1bHQuaXRlbXNbaV0uc25pcHBldC50aXRsZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBWSURFTyAocGVyc29uYWwpXG5cdFx0Ly8gQVBJIHJlcXVlc3QgZGV0YWlsc1xuXHRcdHZhciByZXF1ZXN0VmlkZW8gPSBnYXBpLmNsaWVudC55b3V0dWJlLnBsYXlsaXN0SXRlbXMubGlzdCh7XG5cdFx0XHRwYXJ0OiBcInNuaXBwZXRcIixcblx0XHRcdHBsYXlsaXN0SWQ6IFwiVVV5NmpjQUY2ZlpHdHRSdmloeVFpeGJBXCIsXG5cdFx0XHRtYXhSZXN1bHRzOiA4XG5cdFx0fSk7XG5cdFx0dmFyIHJlcXVlc3RDb21taXNzaW9ucyA9IGdhcGkuY2xpZW50LnlvdXR1YmUucGxheWxpc3RJdGVtcy5saXN0KHtcblx0XHRcdHBhcnQ6IFwic25pcHBldFwiLFxuXHRcdFx0cGxheWxpc3RJZDogXCJQTDg0LURORFNVOHA1V1A2akE3aHZPQ1Y5ZElLQk5qZENTXCIsXG5cdFx0XHRtYXhSZXN1bHRzOiA4XG5cdFx0fSk7XG5cdFx0Ly8gUGVyZm9ybSBBUEkgcmVxdWVzdCwgcHJvY2VzcyByZXNwb25zZVxuICAgICAgICB2YXIgdmlkZW9SZXNwb25zZSwgY29tbWlzc2lvblJlc3BvbnNlO1xuXHRcdHJlcXVlc3RWaWRlby5leGVjdXRlKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2aWRlb1Jlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICBwcm9jZXNzUmVzcG9uc2VzKCk7XG5cdFx0fSk7XG4gICAgICAgIHJlcXVlc3RDb21taXNzaW9ucy5leGVjdXRlKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb21taXNzaW9uUmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHByb2Nlc3NSZXNwb25zZXMoKTtcblx0XHR9KTtcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlcygpIHtcbiAgICAgICAgICAgIGlmICh2aWRlb1Jlc3BvbnNlICYmIGNvbW1pc3Npb25SZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbWJpbmUgdmlkZW8gYW5kIGNvbW1pc3Npb24gcmVzcG9uc2VzXG4gICAgICAgICAgICAgICAgcmVzdWx0SXRlbXMgPSB2aWRlb1Jlc3BvbnNlLnJlc3VsdC5pdGVtcy5jb25jYXQoY29tbWlzc2lvblJlc3BvbnNlLnJlc3VsdC5pdGVtcyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0SXRlbXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRlQSA9IG5ldyBEYXRlKGEuc25pcHBldC5wdWJsaXNoZWRBdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRlQiA9IG5ldyBEYXRlKGIuc25pcHBldC5wdWJsaXNoZWRBdCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlQiAtIGRhdGVBOyAvLyBzb3J0IGJ5IGRhdGUgYXNjZW5kaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0SXRlbXMgPSByZXN1bHRJdGVtcy5zcGxpY2UoMCwgOCk7XG4gICAgICAgICAgICAgICAgLy8gaW5zZXJ0IGludG8gcGFnZVxuICAgICAgICAgICAgICAgIHZhciBudGhDaGlsZDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgXHRudGhDaGlsZCA9IGkrMTtcbiAgICAgICAgICAgICAgICBcdCQoXCJzZWN0aW9uLnZpZGVvIC5pdGVtOm50aC1jaGlsZChcIitudGhDaGlsZCtcIikgZGl2LmltZ1wiKVxuICAgICAgICAgICAgICAgIFx0XHQuYXR0cihcInN0eWxlXCIsICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCInK3Jlc3VsdEl0ZW1zW2ldLnNuaXBwZXQudGh1bWJuYWlscy5oaWdoLnVybCsnXCIpJylcbiAgICAgICAgICAgICAgICBcdFx0LnNpYmxpbmdzKFwiLnRpdGxlXCIpLmh0bWwocmVzdWx0SXRlbXNbaV0uc25pcHBldC50aXRsZSlcbiAgICAgICAgICAgICAgICBcdFx0LnBhcmVudCgpLmF0dHIoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1cIityZXN1bHRJdGVtc1tpXS5zbmlwcGV0LnJlc291cmNlSWQudmlkZW9JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblx0fSk7XG59XG5nYXBpLmxvYWQoXCJjbGllbnRcIiwgc3RhcnQpO1xuXG4vLyBTb3VuZENsb3VkIEFQSVxuU0MuaW5pdGlhbGl6ZSh7XG5cdGNsaWVudF9pZDogXCI2aWJZWlRtRjVxbnB2cDg4UzlWM3dlclZyQzE4V0NkQ1wiIC8vY2hhbmdlXG59KTtcblNDLmdldChcIi91c2Vycy8yNDczNzAzMjAvdHJhY2tzXCIsIHtsaW1pdDogOH0pLnRoZW4oZnVuY3Rpb24odHJhY2tzKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0bnRoQ2hpbGQgPSBpKzE7XG5cdFx0Ly8gY292ZXJTcmMgPSBKU09OLnN0cmluZ2lmeSh0cmFja3NbaV0uYXJ0d29ya191cmwucmVwbGFjZShcImxhcmdlXCIsIFwidDMwMHgzMDBcIikpO1xuXHRcdCQoXCJzZWN0aW9uLmxhY3VuYSAuaXRlbTpudGgtY2hpbGQoXCIrbnRoQ2hpbGQrXCIpIGRpdi5pbWdcIilcblx0XHRcdC5hdHRyKFwic3R5bGVcIiwgJ2JhY2tncm91bmQtaW1hZ2U6IHVybChcIicrdHJhY2tzW2ldLmFydHdvcmtfdXJsLnJlcGxhY2UoXCJsYXJnZVwiLCBcInQzMDB4MzAwXCIpKydcIiknKVxuXHRcdFx0LnBhcmVudCgpLmF0dHIoXCJocmVmXCIsIHRyYWNrc1tpXS5wZXJtYWxpbmtfdXJsKTtcblx0fVxufSk7XG5cbi8vIFJlc3BvbnNpdmUgWVQgdGh1bWJuYWlscy9TQyBjb3ZlcnNcbmZ1bmN0aW9uIHJlc2l6ZVN0dWZmKCkge1xuXHR2YXIgbmV3SGVpZ2h0ID0gJChcInNlY3Rpb24uYWRqdXN0LWhlaWdodCAuaXRlbVwiKS53aWR0aCgpIC8gMTYgKiA5O1xuXHQkKFwic2VjdGlvbi5hZGp1c3QtaGVpZ2h0IC5pdGVtXCIpLmNzcyhcImhlaWdodFwiLCBuZXdIZWlnaHQrXCJweFwiKTtcblxuXHR2YXIgbmV3SGVpZ2h0ID0gJChcInNlY3Rpb246bm90KC5hZGp1c3QtaGVpZ2h0KSAuaXRlbVwiKS53aWR0aCgpO1xuXHQkKFwic2VjdGlvbjpub3QoLmFkanVzdC1oZWlnaHQpIC5pdGVtXCIpLmNzcyhcImhlaWdodFwiLCBuZXdIZWlnaHQrXCJweFwiKTtcbn1cbnJlc2l6ZVN0dWZmKCk7XG4kKHdpbmRvdykucmVzaXplKHJlc2l6ZVN0dWZmKTtcblxuLy8gSW1hZ2UgaG92ZXIgb3ZlcmxhcC96LWluZGV4IGZpeFxudmFyIGhpZ2ggPSAzO1xuJChcIi5pdGVtXCIpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHQkKHRoaXMpLmNzcyh7XCJ6LWluZGV4XCI6IGhpZ2h9KTtcblx0aGlnaCsrO1xufSk7XG5cbi8vIENoZXZyb24gc2Nyb2xsZXJcbnZhciBzcGFjZXJIZWlnaHQ7XG4kKFwiLmNoZXZyb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblx0c3BhY2VySGVpZ2h0ID0gJChcIi5zcGFjZXJcIikuaGVpZ2h0KCk7XG5cdGNvbnNvbGUubG9nKHNwYWNlckhlaWdodCk7XG5cdHdpbmRvdy5zY3JvbGwoeyB0b3A6IHNwYWNlckhlaWdodCwgbGVmdDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG59KTtcblxuLy8gRGlzY29yZCBsaW5rIHBvcHVwXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0Ly8gU3RvcCBpZiBpbnB1dCBmaWVsZCB3YXMgY2xpY2tlZFxuXHRpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKFwicG9wdXAtaW5wdXRcIikpIHtcblx0XHQvLyBJZiBpY29uIHdhcyBjbGlja2VkXG5cdFx0aWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZGlzY29yZFwiKSkge1xuXHRcdFx0Ly8gU2VsZWN0IHRleHQgaWYgaGlkZGVuXG5cdFx0XHRpZiAoJChlLnRhcmdldCkuY2hpbGRyZW4oXCIucG9wdXBcIikuaGFzQ2xhc3MoXCJoaWRkZW5cIikpIHtcblx0XHRcdFx0JChlLnRhcmdldCkuY2hpbGRyZW4oXCIucG9wdXBcIikuY2hpbGRyZW4oXCJpbnB1dFwiKS5zZWxlY3QoKTtcblx0XHRcdH1cblx0XHRcdC8vIFRvZ2dsZSB2aXNpYmlsaXR5XG5cdFx0XHQkKGUudGFyZ2V0KS5jaGlsZHJlbihcIi5wb3B1cFwiKS50b2dnbGVDbGFzcyhcImhpZGRlblwiKTtcblx0XHR9XG5cdFx0Ly8gSWYgaGlkZGVuIGFuZCBpY29uIHdhcyBub3QgY2xpY2tlZFxuXHRcdGlmICghJChcIi5kaXNjb3JkIC5wb3B1cFwiKS5oYXNDbGFzcyhcImhpZGRlblwiKSAmJiAhJChlLnRhcmdldCkuaGFzQ2xhc3MoXCJkaXNjb3JkXCIpKSB7XG5cdFx0XHQvLyBIaWRlXG5cdFx0XHQkKFwiLmRpc2NvcmQgLnBvcHVwXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuXHRcdH1cblx0fVxufSk7XG4vLyBFbWFpbCBsaW5rIHBvcHVwXG4kKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0Ly8gU3RvcCBpZiBpbnB1dCBmaWVsZCB3YXMgY2xpY2tlZFxuXHRpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKFwicG9wdXAtaW5wdXRcIikpIHtcblx0XHQvLyBJZiBpY29uIHdhcyBjbGlja2VkXG5cdFx0aWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwiZW1haWxcIikpIHtcblx0XHRcdC8vIFNlbGVjdCB0ZXh0IGlmIGhpZGRlblxuXHRcdFx0aWYgKCQoZS50YXJnZXQpLmNoaWxkcmVuKFwiLnBvcHVwXCIpLmhhc0NsYXNzKFwiaGlkZGVuXCIpKSB7XG5cdFx0XHRcdCQoZS50YXJnZXQpLmNoaWxkcmVuKFwiLnBvcHVwXCIpLmNoaWxkcmVuKFwiaW5wdXRcIikuc2VsZWN0KCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBUb2dnbGUgdmlzaWJpbGl0eVxuXHRcdFx0JChlLnRhcmdldCkuY2hpbGRyZW4oXCIucG9wdXBcIikudG9nZ2xlQ2xhc3MoXCJoaWRkZW5cIik7XG5cdFx0fVxuXHRcdC8vIElmIGhpZGRlbiBhbmQgaWNvbiB3YXMgbm90IGNsaWNrZWRcblx0XHRpZiAoISQoXCIuZW1haWwgLnBvcHVwXCIpLmhhc0NsYXNzKFwiaGlkZGVuXCIpICYmICEkKGUudGFyZ2V0KS5oYXNDbGFzcyhcImVtYWlsXCIpKSB7XG5cdFx0XHQvLyBIaWRlXG5cdFx0XHQkKFwiLmVtYWlsIC5wb3B1cFwiKS5hZGRDbGFzcyhcImhpZGRlblwiKTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vLyBTb2NpYWwgbWVkaWEgbGlua3MgYW5jaG9yXG5mdW5jdGlvbiBzbWxBbmNob3IoKSB7XG4gICAgdmFyIHNtbCA9ICQoXCIucGVyc29uYWwtbGlua3NcIik7IC8vIHNvY2lhbCBtZWRpYSBsaW5rc1xuICAgIHZhciBzYXNtbCA9ICQoXCIuc3BhY2VyXCIpLmhlaWdodCgpIC0gc21sLmhlaWdodCgpOyAvLyBzcGFjZSBhYm92ZSBzb2NpYWwgbWVkaWEgbGlua3NcbiAgICBpZiAoc2FzbWwgPCB3aW5kb3cucGFnZVlPZmZzZXQpIHNtbC5jc3MoXCJwb3NpdGlvblwiLCBcImZpeGVkXCIpLmNzcyhcInRvcFwiLCBcIjBweFwiKTtcbiAgICBlbHNlIHNtbC5jc3MoXCJwb3NpdGlvblwiLCBcIlwiKS5jc3MoXCJ0b3BcIiwgXCJcIik7XG59XG4kKHdpbmRvdykuc2Nyb2xsKHNtbEFuY2hvcik7XG4kKHdpbmRvdykucmVzaXplKHNtbEFuY2hvcik7XG4iXX0=
