export type Categorical =
  | 'accent'
  | 'category10'
  | 'category20'
  | 'category20b'
  | 'category20c'
  | 'dark2'
  | 'paired'
  | 'pastel1'
  | 'pastel2'
  | 'set1'
  | 'set2'
  | 'set3'
  | 'tableau10'
  | 'tableau20';

export type SequentialSingleHue =
  | 'blues'
  | 'tealblues'
  | 'teals'
  | 'greens'
  | 'browns'
  | 'greys'
  | 'purples'
  | 'warmgreys'
  | 'reds'
  | 'oranges';

export type SequentialMultiHue =
  | 'turbo'
  | 'viridis'
  | 'inferno'
  | 'magma'
  | 'plasma'
  | 'cividis'
  | 'bluegreen'
  | 'bluegreen-3'
  | 'bluegreen-4'
  | 'bluegreen-5'
  | 'bluegreen-6'
  | 'bluegreen-7'
  | 'bluegreen-8'
  | 'bluegreen-9'
  | 'bluepurple'
  | 'bluepurple-3'
  | 'bluepurple-4'
  | 'bluepurple-5'
  | 'bluepurple-6'
  | 'bluepurple-7'
  | 'bluepurple-8'
  | 'bluepurple-9'
  | 'goldgreen'
  | 'goldgreen-3'
  | 'goldgreen-4'
  | 'goldgreen-5'
  | 'goldgreen-6'
  | 'goldgreen-7'
  | 'goldgreen-8'
  | 'goldgreen-9'
  | 'goldorange'
  | 'goldorange-3'
  | 'goldorange-4'
  | 'goldorange-5'
  | 'goldorange-6'
  | 'goldorange-7'
  | 'goldorange-8'
  | 'goldorange-9'
  | 'goldred'
  | 'goldred-3'
  | 'goldred-4'
  | 'goldred-5'
  | 'goldred-6'
  | 'goldred-7'
  | 'goldred-8'
  | 'goldred-9'
  | 'greenblue'
  | 'greenblue-3'
  | 'greenblue-4'
  | 'greenblue-5'
  | 'greenblue-6'
  | 'greenblue-7'
  | 'greenblue-8'
  | 'greenblue-9'
  | 'orangered'
  | 'orangered-3'
  | 'orangered-4'
  | 'orangered-5'
  | 'orangered-6'
  | 'orangered-7'
  | 'orangered-8'
  | 'orangered-9'
  | 'purplebluegreen'
  | 'purplebluegreen-3'
  | 'purplebluegreen-4'
  | 'purplebluegreen-5'
  | 'purplebluegreen-6'
  | 'purplebluegreen-7'
  | 'purplebluegreen-8'
  | 'purplebluegreen-9'
  | 'purpleblue'
  | 'purpleblue-3'
  | 'purpleblue-4'
  | 'purpleblue-5'
  | 'purpleblue-6'
  | 'purpleblue-7'
  | 'purpleblue-8'
  | 'purpleblue-9'
  | 'purplered'
  | 'purplered-3'
  | 'purplered-4'
  | 'purplered-5'
  | 'purplered-6'
  | 'purplered-7'
  | 'purplered-8'
  | 'purplered-9'
  | 'redpurple'
  | 'redpurple-3'
  | 'redpurple-4'
  | 'redpurple-5'
  | 'redpurple-6'
  | 'redpurple-7'
  | 'redpurple-8'
  | 'redpurple-9'
  | 'yellowgreenblue'
  | 'yellowgreenblue-3'
  | 'yellowgreenblue-4'
  | 'yellowgreenblue-5'
  | 'yellowgreenblue-6'
  | 'yellowgreenblue-7'
  | 'yellowgreenblue-8'
  | 'yellowgreenblue-9'
  | 'yellowgreen'
  | 'yellowgreen-3'
  | 'yellowgreen-4'
  | 'yellowgreen-5'
  | 'yellowgreen-6'
  | 'yellowgreen-7'
  | 'yellowgreen-8'
  | 'yellowgreen-9'
  | 'yelloworangebrown'
  | 'yelloworangebrown-3'
  | 'yelloworangebrown-4'
  | 'yelloworangebrown-5'
  | 'yelloworangebrown-6'
  | 'yelloworangebrown-7'
  | 'yelloworangebrown-8'
  | 'yelloworangebrown-9'
  | 'yelloworangered'
  | 'yelloworangered-3'
  | 'yelloworangered-4'
  | 'yelloworangered-5'
  | 'yelloworangered-6'
  | 'yelloworangered-7'
  | 'yelloworangered-8'
  | 'yelloworangered-9'
  | 'darkblue'
  | 'darkblue-3'
  | 'darkblue-4'
  | 'darkblue-5'
  | 'darkblue-6'
  | 'darkblue-7'
  | 'darkblue-8'
  | 'darkblue-9'
  | 'darkgold'
  | 'darkgold-3'
  | 'darkgold-4'
  | 'darkgold-5'
  | 'darkgold-6'
  | 'darkgold-7'
  | 'darkgold-8'
  | 'darkgold-9'
  | 'darkgreen'
  | 'darkgreen-3'
  | 'darkgreen-4'
  | 'darkgreen-5'
  | 'darkgreen-6'
  | 'darkgreen-7'
  | 'darkgreen-8'
  | 'darkgreen-9'
  | 'darkmulti'
  | 'darkmulti-3'
  | 'darkmulti-4'
  | 'darkmulti-5'
  | 'darkmulti-6'
  | 'darkmulti-7'
  | 'darkmulti-8'
  | 'darkmulti-9'
  | 'darkred'
  | 'darkred-3'
  | 'darkred-4'
  | 'darkred-5'
  | 'darkred-6'
  | 'darkred-7'
  | 'darkred-8'
  | 'darkred-9'
  | 'lightgreyred'
  | 'lightgreyred-3'
  | 'lightgreyred-4'
  | 'lightgreyred-5'
  | 'lightgreyred-6'
  | 'lightgreyred-7'
  | 'lightgreyred-8'
  | 'lightgreyred-9'
  | 'lightgreyteal'
  | 'lightgreyteal-3'
  | 'lightgreyteal-4'
  | 'lightgreyteal-5'
  | 'lightgreyteal-6'
  | 'lightgreyteal-7'
  | 'lightgreyteal-8'
  | 'lightgreyteal-9'
  | 'lightmulti'
  | 'lightmulti-3'
  | 'lightmulti-4'
  | 'lightmulti-5'
  | 'lightmulti-6'
  | 'lightmulti-7'
  | 'lightmulti-8'
  | 'lightmulti-9'
  | 'lightorange'
  | 'lightorange-3'
  | 'lightorange-4'
  | 'lightorange-5'
  | 'lightorange-6'
  | 'lightorange-7'
  | 'lightorange-8'
  | 'lightorange-9'
  | 'lighttealblue'
  | 'lighttealblue-3'
  | 'lighttealblue-4'
  | 'lighttealblue-5'
  | 'lighttealblue-6'
  | 'lighttealblue-7'
  | 'lighttealblue-8'
  | 'lighttealblue-9';

export type Diverging =
  | 'blueorange'
  | 'blueorange-3'
  | 'blueorange-4'
  | 'blueorange-5'
  | 'blueorange-6'
  | 'blueorange-7'
  | 'blueorange-8'
  | 'blueorange-9'
  | 'blueorange-10'
  | 'blueorange-11'
  | 'brownbluegreen'
  | 'brownbluegreen-3'
  | 'brownbluegreen-4'
  | 'brownbluegreen-5'
  | 'brownbluegreen-6'
  | 'brownbluegreen-7'
  | 'brownbluegreen-8'
  | 'brownbluegreen-9'
  | 'brownbluegreen-10'
  | 'brownbluegreen-11'
  | 'purplegreen'
  | 'purplegreen-3'
  | 'purplegreen-4'
  | 'purplegreen-5'
  | 'purplegreen-6'
  | 'purplegreen-7'
  | 'purplegreen-8'
  | 'purplegreen-9'
  | 'purplegreen-10'
  | 'purplegreen-11'
  | 'pinkyellowgreen'
  | 'pinkyellowgreen-3'
  | 'pinkyellowgreen-4'
  | 'pinkyellowgreen-5'
  | 'pinkyellowgreen-6'
  | 'pinkyellowgreen-7'
  | 'pinkyellowgreen-8'
  | 'pinkyellowgreen-9'
  | 'pinkyellowgreen-10'
  | 'pinkyellowgreen-11'
  | 'purpleorange'
  | 'purpleorange-3'
  | 'purpleorange-4'
  | 'purpleorange-5'
  | 'purpleorange-6'
  | 'purpleorange-7'
  | 'purpleorange-8'
  | 'purpleorange-9'
  | 'purpleorange-10'
  | 'purpleorange-11'
  | 'redblue'
  | 'redblue-3'
  | 'redblue-4'
  | 'redblue-5'
  | 'redblue-6'
  | 'redblue-7'
  | 'redblue-8'
  | 'redblue-9'
  | 'redblue-10'
  | 'redblue-11'
  | 'redgrey'
  | 'redgrey-3'
  | 'redgrey-4'
  | 'redgrey-5'
  | 'redgrey-6'
  | 'redgrey-7'
  | 'redgrey-8'
  | 'redgrey-9'
  | 'redgrey-10'
  | 'redgrey-11'
  | 'redyellowblue'
  | 'redyellowblue-3'
  | 'redyellowblue-4'
  | 'redyellowblue-5'
  | 'redyellowblue-6'
  | 'redyellowblue-7'
  | 'redyellowblue-8'
  | 'redyellowblue-9'
  | 'redyellowblue-10'
  | 'redyellowblue-11'
  | 'redyellowgreen'
  | 'redyellowgreen-3'
  | 'redyellowgreen-4'
  | 'redyellowgreen-5'
  | 'redyellowgreen-6'
  | 'redyellowgreen-7'
  | 'redyellowgreen-8'
  | 'redyellowgreen-9'
  | 'redyellowgreen-10'
  | 'redyellowgreen-11'
  | 'spectral'
  | 'spectral-3'
  | 'spectral-4'
  | 'spectral-5'
  | 'spectral-6'
  | 'spectral-7'
  | 'spectral-8'
  | 'spectral-9'
  | 'spectral-10'
  | 'spectral-11';

export type Cyclical = 'rainbow' | 'sinebow';

export type ColorScheme =
  | Categorical
  | SequentialSingleHue
  | SequentialMultiHue
  | Diverging
  | Cyclical;