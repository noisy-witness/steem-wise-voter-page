import { ActionTree } from "vuex";
import { State } from "./State";
import { Api } from "../api/Api";
import { smartvotes_ruleset } from "steem-smartvotes";

export const actions: ActionTree<State, State> = {
    setVoterUsername: ({ commit, dispatch, state }, voterUsername: string): void => {
        commit("setVoterUsername", voterUsername);
        dispatch("checkRulesetsLoadedFor");
        dispatch("setVoteData", state.voteData); // reset
    },
    setDelegatorUsername: ({ commit, dispatch, state }, delegatorUsername: string): void => {
        commit("setDelegatorUsername", delegatorUsername);
        dispatch("checkRulesetsLoadedFor");
        dispatch("setVoteData", state.voteData); // reset
    },
    setRulesetsLoadedFor: ({ commit, dispatch, state }, payload: {voter: string, delegator: string}): void => {
        commit("setRulesetsLoadedFor", payload);
        dispatch("checkRulesetsLoadedFor");
    },
    checkRulesetsLoadedFor: ({ commit, dispatch, state }): void => {
        if (state.voterUsername !== state.rulesetsLoadedFor.voter
                || state.delegatorUsername !== state.rulesetsLoadedFor.delegator) {
            commit("setRulesetsLoadedFor", { voter: "", delegator: "" });
            commit("setRulesets", { rulesets: [] });
            commit("setSelectedRulesetIndex", -1);
        }
    },
    loadRulesets: ({ commit, dispatch, state }): void => {
        commit("setRulesetLoadingState", {inProggress: true, error: "", message: "Checking if accounts exist..."});
        const voterUsername = state.voterUsername;
        const delegatorUsername = state.delegatorUsername;
        Api.validateAccountsExistence(delegatorUsername, voterUsername)
        .then(() => {
            commit("setRulesetLoadingState", {
                inProggress: true, error: "", message: "Accounts exist. Loading rulesets...",
            });
        })
        .then(Api.loadRulesets(delegatorUsername, voterUsername))
        .then((rulesets: smartvotes_ruleset []) => {
            commit("setRulesets", { rulesets: rulesets });
            dispatch("setSelectedRulesetIndex", (rulesets.length > 0 ? 0 : -1));
            commit("setRulesetLoadingState", { inProggress: false, error: "", message: "" });
            commit("setRulesetsLoadedFor", { voter: voterUsername, delegator: delegatorUsername });
        })
        .catch(error => {
            commit("setRulesetLoadingState", { inProggress: false, error: error.message, message: ""});
        });
    },
    setSelectedRulesetIndex: ({ commit, dispatch, state }, payload: number): void => {
        commit("setSelectedRulesetIndex", payload);
        dispatch("setVoteData", state.voteData);
    },
    setVoteData: ({ commit, dispatch, state },
                  payload: { author: string, permlink: string, weight: number, action: "upvote" | "flag" }): void => {
        commit("setVoteData", payload);
        dispatch("setValidated", false);
    },
    setValidated: ({ commit, dispatch, state }, payload: boolean): void => {
        commit("setValidated", payload);
    },
};
