/* tslint:disable no-null-keyword */
/**
 * This file is automatically generated by https://github.com/wise-team/wise-ci.
 * Please do not change contents between templates.
 */

/*§ allowUndefined(); outputConfig(data) §*/
export const data = {
  "config": {
    "license": {
      "code": "MIT",
    },
    "wise": {
      "version": "3.0.3",
      "homepage": "https://wise.vote/",
    },
    "steem": {
      "minimalApiBlockchainVersion": "0.20.5",
      "minimalApiHardforkVersion": "0.20.0",
      "defaultApiUrl": "https://api.steemit.com",
      "apis": [ {
  "url": "https://api.steemit.com",
  "get_block": true,
}, {
  "url": "https://rpc.buildteam.io",
  "get_block": true,
}, {
  "url": "https://anyx.io",
  "get_block": true,
} ],
      "waitForNextHeadBlockDelayMs": 3100,
    },
    "witness": {
      "account": "wise-team",
    },
    "team": {
      "name": "Wise Team",
      "website": {
        "url": "https://wise-team.io/",
      },
      "steem": {
        "account": "wise-team",
      },
      "securityEmail": "jedrzejblew@gmail.com",
    },
    "environments": {
      "production": {
        "host": "wise.vote",
        "protocol": "https",
        "deployBranch": "master",
        "certbot": {
          "email": "noisy.pl@gmail.com",
        },
      },
      "staging": {
        "host": "dev.wise.jblew.pl",
        "protocol": "https",
        "deployBranch": "staging",
        "certbot": {
          "email": "jedrzejblew@gmail.com",
        },
      },
    },
    "npm": {
      "node": {
        "version": "10.12",
      },
      "keywords": [ "steem", "blockchain", "wise" ],
      "author": "The Wise Team (https://wise-team.io/)",
    },
    "docker": {
      "imageHostname": "wise",
      "maintainer": "The Wise Team (https://wise-team.io/) <jedrzejblew@gmail.com>",
      "labels": {
        "domain": "vote.wise",
        "defaultLabels": [ () => "maintainer=\"The Wise Team (https://wise-team.io/) <jedrzejblew@gmail.com>\"", () => "vote.wise.wise-version=\"3.0.3\"", () => "vote.wise.license=\"MIT\"", () => "vote.wise.repository=\"steem-wise-voter-page\"" ],
      },
      "generateDockerfileFrontMatter": () => "LABEL maintainer=\"The Wise Team (https://wise-team.io/) <jedrzejblew@gmail.com>\"\nLABEL vote.wise.wise-version=\"3.0.3\"\nLABEL vote.wise.license=\"MIT\"\nLABEL vote.wise.repository=\"steem-wise-voter-page\"",
    },
    "repository": {
      "github": {
        "organization": "wise-team",
      },
      "readme": {
        "badges": [ () => "[object Object]", () => "[object Object]", () => "[object Object]", () => "[object Object]" ],
        "generateDefaultBadges": () => "\n[![License](https://img.shields.io/github/license/wise-team/steem-wise-voter-page.svg?style=flat-square)](https://github.com/wise-team/steem-wise-voter-page/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Chat](https://img.shields.io/badge/chat%20on%20discord-6b11ff.svg?style=flat-square)](https://discordapp.com/invite/CwxQDbG) [![Wise operations count](https://img.shields.io/badge/dynamic/json.svg?label=wise%20operations%20count&url=https%3A%2F%2Fsql.wise.vote%2Foperations%3Fselect%3Dcount&query=%24%5B0%5D.count&colorB=blue&style=flat-square)](https://sql.wise.vote/operations?select=moment,delegator,voter,operation_type&order=moment.desc)\n",
        "generateHelpUsMd": () => "\n## Contribute to steem Wise\n\nWe welcome warmly:\n\n- Bug reports via [issues](https://github.com/wise-team/steem-wise-voter-page).\n- Enhancement requests via via [issues](https://github.com/wise-team/steem-wise-voter-page/issues).\n- [Pull requests](https://github.com/wise-team/steem-wise-voter-page/pulls)\n- Security reports to _jedrzejblew@gmail.com_.\n\n**Before** contributing please **read [Wise CONTRIBUTING guide](https://github.com/wise-team/steem-wise-core/blob/master/CONTRIBUTING.md)**.\n\nThank you for developing WISE together!\n\n\n\n## Like the project? Let @wise-team become your favourite witness!\n\nIf you use & appreciate our software — you can easily support us. Just vote for \"wise-team\" to become you one of your witnesses. You can do it here: [https://steemit.com/~witnesses](https://steemit.com/~witnesses).\n\n",
        "generateHelpMd": () => "\n## Where to get help?\n\n- Feel free to talk with us on our chat: [https://discordapp.com/invite/CwxQDbG](https://discordapp.com/invite/CwxQDbG) .\n- You can read [The Wise Manual](https://docs.wise.vote)\n- You can also contact Jędrzej at jedrzejblew@gmail.com (if you think that you found a security issue, please contact me quickly).\n\nYou can also ask questions as issues in appropriate repository: See [issues for this repository](https://github.com/wise-team/steem-wise-voter-page/issues).\n\n",
      },
      "repositories": {
        "core": {
          "name": "steem-wise-core",
          "npmPackageName": "steem-wise-core",
          "isNode": true,
          "isNpm": true,
          "nodePath": "",
        },
        "cli": {
          "name": "steem-wise-cli",
          "isNode": true,
          "npmPackageName": "steem-wise-cli",
          "isNpm": true,
          "nodePath": "",
        },
        "voterPage": {
          "name": "steem-wise-voter-page",
          "isNode": false,
          "isNpm": true,
          "nodePath": "",
        },
        "manual": {
          "name": "steem-wise-manual",
          "isNode": false,
          "isNpm": false,
          "nodePath": "",
        },
        "sql": {
          "name": "steem-wise-sql",
          "isNode": true,
          "isNpm": true,
          "nodePath": "/pusher",
        },
        "test": {
          "name": "steem-wise-test",
          "isNode": true,
          "isNpm": true,
          "nodePath": "",
        },
        "hub": {
          "name": "wise-hub",
          "isNode": true,
          "isNpm": true,
          "nodePath": "/wise-hub-frontend",
        },
        "ci": {
          "name": "wise-ci",
          "isNode": true,
          "isNpm": true,
          "nodePath": "",
        },
        "typesForSteemJs": {
          "name": "types-for-steem-js",
          "isNode": false,
          "isNpm": true,
          "nodePath": "",
        },
      },
    },
    "vault": {
      "url": "https://127.0.0.1:8200",
      "backendFilePath": "/opt/wise/vault/Vaultfile",
      "docker": {
        "network": "vault-net",
        "services": {
          "vault": {
            "name": "vault",
            "container": "wise-vault",
            "image": "wise/vault",
          },
        },
      },
      "unseal": {
        "secret_shares": 4,
        "secret_threshold": 2,
      },
      "auths": {
        "AppRole": {
          "type": "approle",
          "description": "Docker service login",
          "config": {},
        },
        "userpass": {
          "type": "userpass",
          "description": "User login",
          "config": {},
        },
      },
      "users": [ {
  "username": "jblew",
  "policies": [ "admin" ],
}, {
  "username": "noisy",
  "policies": [ "admin" ],
} ],
      "policies": () => { throw new Error(" Only (data)=>{} or ()=>{} functions can be evaluated in generated config file "); },
      "roles": () => { throw new Error(" Only (data)=>{} or ()=>{} functions can be evaluated in generated config file "); },
      "secrets": {
        "humanEnter": {
          "steemConnectClientId": {
            "description": "Steemconnect client_id",
            "key": "/human/steemconnect/client_id",
          },
          "slackWebhookUrl": {
            "description": "Slack Webhook URL",
            "key": "/human/slack/webhook_url",
          },
        },
        "generated": {
          "sessionSalt": "/generated/session/salt",
        },
      },
    },
    "communitation": {
      "chat": {
        "name": "discord",
        "url": "https://discordapp.com/invite/CwxQDbG",
      },
    },
    "sql": {
      "url": {
        "production": "https://sql.wise.vote/",
        "staging": "https://sql.dev.wise.jblew.pl/",
      },
      "port": 8094,
      "protocol": {
        "version": "1.0",
        "maxRowsPerPage": 1000,
      },
      "pusher": {
        "requestConcurrencyPerNode": 3,
        "blockProcessingTimeoutMs": 9000,
        "nextBlockDelayMs": 3100,
      },
      "docker": {
        "services": {
          "db": {
            "name": "wise_sql_db",
            "container": "wise_sql_db",
          },
          "pusher": {
            "name": "wise_sql_pusher",
            "container": "wise-sql-pusher",
            "image": "wise/sql-pusher",
          },
          "postgrest": {
            "name": "postgrest",
            "container": "wise-sql-postgrest",
            "port": 9002,
          },
          "api_proxy": {
            "name": "wise_sql_api_proxy",
            "container": "wise_sql_api_proxy",
          },
        },
        "volumes": {
          "db": {
            "name": "pgdata",
          },
        },
      },
    },
    "manual": {
      "url": {
        "production": "https://docs.wise.vote",
        "staging": "https://docs.dev.wise.jblew.pl",
      },
      "port": 8096,
      "docker": {
        "services": {
          "frontend": {
            "name": "frontend",
            "container": "wise-manual",
            "image": "wise/manual",
          },
        },
      },
    },
    "votingPage": {
      "port": 8093,
      "url": {
        "production": "https://wise.vote/voting-page/",
        "staging": "https://dev.wise.jblew.pl/voting-page/",
      },
      "docker": {
        "services": {
          "frontend": {
            "name": "site",
            "container": "voting-page",
            "image": "wise/voting-page",
          },
        },
      },
    },
    "hub": {
      "url": {
        "production": "https://wise.vote/",
        "staging": "https://dev.wise.jblew.pl/",
      },
      "port": 8095,
      "visual": {
        "read": {
          "lastActivity": {
            "trxLinkBase": "https://steemd.com/tx/{trx}",
            "articleLinkBase": "https://steemit.com/@{author}/{permlink}",
          },
        },
      },
      "api": {
        "cookie": {
          "maxAgeMs": 604800000,
        },
      },
      "daemon": {
        "log": {
          "maxHistoryLength": 1000,
        },
      },
      "urls": {
        "api": {
          "base": "/api",
          "auth": {
            "login": {
              "scope": {
                "empty": "/api/auth/login/scope/empty",
                "custom_json": "/api/auth/login/scope/custom_json",
                "custom_json_vote_offline": "/api/auth/login/scope/custom_json/vote/offline",
              },
            },
            "callback": "/api/auth/callback",
            "logout": "/api/auth/logout",
            "revoke_all": "/api/auth/revoke_all",
            "test_login": "/api/auth/test_login",
          },
          "user": {
            "base": "/api/user",
            "settings": "/api/user/settings",
          },
          "accounts": {
            "base": "/api/accounts",
          },
        },
      },
      "docker": {
        "images": {
          "backend": {
            "name": "wise/hub-backend",
          },
        },
        "services": {
          "nginx": {
            "name": "nginx",
          },
          "redis": {
            "name": "redis",
            "volume": "wise_hub_redis",
          },
          "api": {
            "name": "api",
            "appRole": {
              "role": "wise-hub-api",
              "policies": () => { throw new Error(" Only (data)=>{} or ()=>{} functions can be evaluated in generated config file "); },
            },
            "secrets": {
              "appRoleId": "hub-api-approle-id",
              "appRoleSecret": "hub-api-approle-secret",
            },
          },
          "daemon": {
            "name": "daemon",
          },
          "publisher": {
            "name": "publisher",
            "appRole": {
              "role": "wise-hub-daemon",
              "policies": () => { throw new Error(" Only (data)=>{} or ()=>{} functions can be evaluated in generated config file "); },
            },
            "secrets": {
              "appRoleId": "hub-publisher-approle-id",
              "appRoleSecret": "hub-publisher-approle-secret",
            },
          },
          "realtime": {
            "name": "realtime",
            "port": 8099,
          },
        },
      },
      "vault": {
        "secrets": {
          "users": "/hub/steemconnect/users",
          "userProfiles": "/hub/steemconnect/users/profiles",
          "accessTokens": "/hub/steemconnect/users/access_tokens",
          "refreshTokens": "/hub/steemconnect/users/refresh_tokens",
        },
        "policies": {
          "api": {
            "name": "wise-hub-api",
            "policy": () => { throw new Error(" Only (data)=>{} or ()=>{} functions can be evaluated in generated config file "); },
          },
          "publisher": {
            "name": "wise-hub-daemon",
            "policy": () => { throw new Error(" Only (data)=>{} or ()=>{} functions can be evaluated in generated config file "); },
          },
        },
      },
    },
    "test": {
      "healthcheck": {
        "metrics": {
          "periodMs": 259200000,
        },
        "hostedLogs": {
          "url": {
            "production": "https://test.wise.vote/",
            "staging": "https://test.dev.wise.jblew.pl/",
          },
        },
        "docker": {
          "services": {
            "hostedLogs": {
              "name": "wise_healthcheck_hosted_logs",
              "container": "wise_healthcheck_hosted_logs",
            },
          },
        },
        "inBrowserTests": {
          "enabled": false,
          "browsers": [ "firefox" ],
        },
        "api": {
          "testThroughProxy": false,
        },
        "log": {
          "dockerVolume": "wise.test.logs",
        },
        "slack": {
          "mentionUsers": [ "UAEGKTY3T", "UASN9CGJ0" ],
          "webhookUrlFilePath": "/opt/wise/slackWebhook.url",
        },
      },
      "websites": {
        "brokenLinks": {
          "excludes": [ "*linkedin.com*", "*/operations?select=moment,delegator,voter,operation_type&order=moment.desc" ],
        },
        "forbiddenPhrases": [ "noisy-witness", "noisy witness", "smartvote", "muon" ],
      },
    },
    "proxy": {
      "docker": {
        "container": "wise-proxy",
      },
    },
    "websites": [ {
  "url": "https://wise.vote/",
  "checkBrokenLinks": true,
}, {
  "url": "https://wise-team.io/",
  "checkBrokenLinks": true,
}, {
  "url": "https://docs.wise.vote",
  "checkBrokenLinks": false,
} ],
    "steemconnect": {
      "oauth2Settings": {
        "baseAuthorizationUrl": "https://steemconnect.com/oauth2/authorize",
        "tokenUrl": "https://steemconnect.com/api/oauth2/token",
        "tokenRevocationUrl": "https://steemconnect.com/api/oauth2/token/revoke",
      },
      "owner": {
        "account": "wise.vote",
        "profile": {
          "name": "Wise",
          "website": "https://wise.vote/",
        },
        "last_account_update": "2018-10-22T13:31:54",
        "last_owner_update": "2018-10-22T13:31:54",
        "keys": {
          "owner": "STM5qMTthdfQMQREDNxjz3zsKBRY15SfLToNnzPM7RwWddiHwD3Xq",
          "active": [ "STM8jjcuFn1F96eq8ssbtT7UDJpu8AmkR4sgXBhPT7TCUVaozb57q", "STM8YvYn5ykLo1eKkPvVu7jx6Ko3MYjVQ4zP4GRx3JKcBauAk5nHf" ],
          "posting": [ "STM6Xs8WxmVHpf4EBKE3eA2v1J3H9PappSpnGDV8JatuLpJbz436Z", "STM7NuCMemrJ6FJza1Ky733AAbwL5dnzAE7jnLEi4waroH8ZoQCof" ],
          "memo": "STM7F9UXfVpwCbyqonyJawET2WC3jwnV2UT16ubkA7fgqmBDfYK4w",
        },
        "recovery_account": "noisy",
      },
      "app": {
        "account": "wisevote.app",
        "last_account_update": "1970-01-01T00:00:00",
        "last_owner_update": "1970-01-01T00:00:00",
        "keys": {
          "owner": "STM82hFUKjN2j8KGqQ8rz9YgFAbMrWFuCPkabtrAnUfV2JQshNPLz",
          "active": "STM78mV5drS6a5SredobAJXvzZv7tvBo4Cj15rumRcBtMzTWT173a",
          "posting": "STM6ZVzWQvbYSzVpY2PRJHu7QSASVy8aB8xSVcJgx5seYGHPFvJkZ",
          "memo": "STM7o1DigBaUEF28n2ap5PeY9Jqhndz3zWmF7xZ3zfRgSqeLaMnyA",
        },
        "recovery_account": "wise.vote",
      },
      "settings": {
        "id": 493,
        "client_id": "wisevote.app",
        "owner": "wise.vote",
        "redirect_uris": [ "https://wise.vote/voting-page/", "https://wise.vote/api/auth/callback", "https://dev.wise.jblew.pl/api/auth/callback", "http://localhost:8080/", "http://localhost:8080/api/auth/callback" ],
        "name": "WISE",
        "description": "Vote delegation system for STEEM blockchain: https://wise.vote/",
        "icon": "https://wise.vote/assets/wise-full-color-icon-128.png",
        "website": "https://wise.vote/",
        "beneficiaries": null,
        "is_public": true,
        "is_disabled": false,
        "created_at": "2018-07-06T09:53:05.827Z",
        "updated_at": "2018-11-03T13:10:36.467Z",
      },
    },
  },
  "repository": {
    "name": "steem-wise-voter-page",
  },
};
/*§§.*/
