export interface InitialState{
    videos:HomepageVideos[];
    currentPlaying: CurrentPlaying | null;
    SearchTerm:string;
    searchResult:[];
    nextPageToken:string | null;
    recommendedVideos:ReacommendedVideos[];

}

export interface HomepageVideos{}
export interface CurrentPlaying{}
export interface ReacommendedVideos{}