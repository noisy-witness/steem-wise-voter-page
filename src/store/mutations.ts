import { State } from "./State";
import { smartvotes_ruleset } from "steem-smartvotes";

export const mutations = {
    setVoterUsername(state: State, voterUsername: string) {
        state.voterUsername = voterUsername;
    },
    setDelegatorUsername(state: State, delegatorUsername: string) {
        state.delegatorUsername = delegatorUsername;
    },
    setRulesetsLoadedFor(state: State, payload: {voter: string, delegator: string}) {
        state.rulesetsLoadedFor = { voter: payload.voter, delegator: payload.delegator };
    },
    setRulesets(state: State, payload: { rulesets: smartvotes_ruleset [] }) {
        state.rulesets = payload.rulesets;
    },
    setRulesetLoadingState(state: State, payload: { inProggress: boolean, error: string, message: string }) {
        state.rulesetLoadingState = {
            inProggress: payload.inProggress, error: payload.error, message: payload.message,
        };
    },
    setSelectedRulesetIndex(state: State, index: number) {
        state.selectedRulesetIndex = index;
    },
    setVoteData(state: State,
                payload: { author: string, permlink: string, weight: number, action: "upvote" | "flag" }) {
        state.voteData = {
            author: payload.author, permlink: payload.permlink, weight: payload.weight, action: payload.action,
        };
    },
    setValidated(state: State, payload: boolean) {
        state.validated = payload;
    },
};
