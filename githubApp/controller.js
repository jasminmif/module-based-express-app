const rp = require("request-promise");

const githubApiUrl = `https://api.github.com`;
const githubClientId = "55c1ae926681c6dba13e";
const githubSecretId = "931f5da008e804b86ff056bcf957362faaed4297";

const tmpAccessToken = "b4b8cf99766805f2ec06a30d225d3c76ba374886";

// https://developer.github.com/v3/repos/#create-a-repository-for-the-authenticated-user

const githubAppCtrl = {
    authorizeGithubView: async (req, res) => {
        res.render("../githubApp/githubView.ejs", {
            githubApiUrl,
            githubClientId
        });
    },

    githubAuthCallback: async (req, res) => {
        const { query } = req;
        const { code } = query;

        if (!code) {
            return res.send("Error authetication");
        }

        var options = {
            method: "POST",
            uri: "https://github.com/login/oauth/access_token",
            headers: {
                Accept: "application/json"
            },
            body: {
                client_id: githubClientId,
                client_secret: githubSecretId,
                code: code
            },
            json: true
        };

        rp(options)
            .then(function(parsedBody) {
                return res.send(parsedBody);
            })
            .catch(function(err) {
                return res.send(err);
            });
    },

    inviteUserToRepo: async (req, res) => {
        const { repo, username } = req.body;

        const defaultRepoName = "getaquestion";
        const repoOwner = "jasminmif";
        const invitee = "jetonk";

        const url = `${githubApiUrl}/repos/${repoOwner}/${defaultRepoName}/collaborators/${invitee}`;

        var options = {
            method: "PUT",
            uri: url,
            headers: {
                Accept: "application/json",
                "User-Agent": "access-the-project",
                Authorization: `token ${tmpAccessToken}`
            },
            json: true
        };

        rp(options)
            .then(function(parsedBody) {
                return res.send(parsedBody);
            })
            .catch(function(err) {
                return res.send(err);
            });
    },

    removeUserFromRepo: async (req, res) => {
        const defaultRepoName = "getaquestion";
        const repoOwner = "jasminmif";
        const invitee = "jetonk";

        const url = `${githubApiUrl}/repos/${repoOwner}/${defaultRepoName}/collaborators/${invitee}`;

        var options = {
            method: "DELETE",
            uri: url,
            headers: {
                Accept: "application/json",
                "User-Agent": "access-the-project",
                Authorization: `token ${tmpAccessToken}`
            },
            json: true
        };

        rp(options)
            .then(function(parsedBody) {
                return res.send(parsedBody);
            })
            .catch(function(err) {
                return res.send(err);
            });
    }
};

module.exports = githubAppCtrl;
