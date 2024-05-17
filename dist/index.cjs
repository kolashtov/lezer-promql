'use strict';

var lr = require('@lezer/lr');
var highlight = require('@lezer/highlight');

// This file was generated by lezer-generator. You probably shouldn't edit it.
const inf$1 = 161,
  nan$1 = 162,
  Bool$1 = 1,
  Ignoring$1 = 2,
  On$1 = 3,
  GroupLeft$1 = 4,
  GroupRight$1 = 5,
  Offset$1 = 6,
  Atan2$1 = 7,
  Avg$1 = 8,
  Bottomk$1 = 9,
  Count$1 = 10,
  CountValues$1 = 11,
  Group$1 = 12,
  Max$1 = 13,
  Min$1 = 14,
  Quantile$1 = 15,
  Stddev$1 = 16,
  Stdvar$1 = 17,
  Sum$1 = 18,
  Topk$1 = 19,
  By$1 = 20,
  Without$1 = 21,
  And$1 = 22,
  Or$1 = 23,
  Unless$1 = 24,
  Start$1 = 25,
  End$1 = 26;

// Copyright 2021 The Prometheus Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const keywordTokens = {
    inf: inf$1,
    nan: nan$1,
    bool: Bool$1,
    ignoring: Ignoring$1,
    on: On$1,
    group_left: GroupLeft$1,
    group_right: GroupRight$1,
    offset: Offset$1,
};

const specializeIdentifier = (value, stack) => {
    return keywordTokens[value.toLowerCase()] || -1;
};

const contextualKeywordTokens = {
    avg: Avg$1,
    atan2: Atan2$1,
    bottomk: Bottomk$1,
    count: Count$1,
    count_values: CountValues$1,
    group: Group$1,
    max: Max$1,
    min: Min$1,
    quantile: Quantile$1,
    stddev: Stddev$1,
    stdvar: Stdvar$1,
    sum: Sum$1,
    topk: Topk$1,
    by: By$1,
    without: Without$1,
    and: And$1,
    or: Or$1,
    unless: Unless$1,
    start: Start$1,
    end: End$1,
};

const extendIdentifier = (value, stack) => {
    return contextualKeywordTokens[value.toLowerCase()] || -1;
};

// Copyright 2022 The Prometheus Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const promQLHighLight = highlight.styleTags({
    LineComment: highlight.tags.comment,
    LabelName: highlight.tags.labelName,
    StringLiteral: highlight.tags.string,
    NumberLiteral: highlight.tags.number,
    Duration: highlight.tags.number,
    Identifier: highlight.tags.variableName,
    'Abs Absent AbsentOverTime Acos Acosh Asin Asinh Atan Atanh AvgOverTime Ceil Changes Clamp ClampMax ClampMin Cos Cosh CountOverTime DaysInMonth DayOfMonth DayOfWeek DayOfYear Deg Delta Deriv Exp Floor HistogramAvg HistogramCount HistogramFraction HistogramQuantile HistogramSum HoltWinters Hour Idelta Increase Irate LabelReplace LabelJoin LastOverTime Ln Log10 Log2 MaxOverTime MinOverTime Minute Month Pi PredictLinear PresentOverTime QuantileOverTime Rad Rate Resets Round Scalar Sgn Sin Sinh Sort SortDesc SortByLabel SortByLabelDesc Sqrt StddevOverTime StdvarOverTime OPDefined OKDefined OPReplaceNone OKReplaceNone OPZeroIfNone OKZeroIfNone SumOverTime Tan Tanh Time Timestamp Vector Year':
        highlight.tags.function(highlight.tags.variableName),
    'Avg Bottomk Count Count_values Group Max Min Quantile Stddev Stdvar Sum Topk': highlight.tags.operatorKeyword,
    'By Without Bool On Ignoring GroupLeft GroupRight Offset Start End': highlight.tags.modifier,
    'And Unless Or': highlight.tags.logicOperator,
    'Sub Add Mul Mod Div Atan2 Eql Neq Lte Lss Gte Gtr EqlRegex EqlSingle NeqRegex Pow At': highlight.tags.operator,
    UnaryOp: highlight.tags.arithmeticOperator,
    '( )': highlight.tags.paren,
    '[ ]': highlight.tags.squareBracket,
    '{ }': highlight.tags.brace,
    '⚠': highlight.tags.invalid,
});

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Identifier = {__proto__:null,absent_over_time:341, absent:343, abs:345, acos:347, acosh:349, asin:351, asinh:353, atan:355, atanh:357, avg_over_time:359, ceil:361, changes:363, clamp:365, clamp_max:367, clamp_min:369, cos:371, cosh:373, count_over_time:375, days_in_month:377, day_of_month:379, day_of_week:381, day_of_year:383, deg:385, delta:387, deriv:389, exp:391, floor:393, histogram_count:395, histogram_fraction:397, histogram_quantile:399, histogram_stddev:401, histogram_stdvar:403, histogram_sum:405, histogram_avg:407, holt_winters:409, hour:411, idelta:413, increase:415, irate:417, label_replace:419, label_join:421, last_over_time:423, ln:425, log10:427, log2:429, mad_over_time:431, max_over_time:433, min_over_time:435, minute:437, month:439, pi:441, predict_linear:443, present_over_time:445, quantile_over_time:447, rad:449, rate:451, resets:453, round:455, scalar:457, sgn:459, sin:461, sinh:463, sort:465, sort_desc:467, sort_by_label:469, sort_by_label_desc:471, sqrt:473, stddev_over_time:475, stdvar_over_time:477, op_defined:479, ok_defined:481, op_replace_none:483, ok_replace_none:485, op_zero_if_none:487, ok_zero_if_none:489, sum_over_time:491, tan:493, tanh:495, timestamp:497, time:499, vector:501, year:503};
const parser = lr.LRParser.deserialize({
  version: 14,
  states: "9zOYQPOOO'}QPOOOOQO'#Cz'#CzO(SQPO'#CyQ(_QQOOOOQO'#Dc'#DcO(YQPO'#DbOOQO'#F]'#F]O)lQPO'#FbOYQPO'#F_OYQPO'#FaO0jQSO'#FdO0uQQO'#FcOOQO'#Fc'#FcOOQO'#Fw'#FwOOQO'#Dd'#DdOOQO'#Df'#DfOOQO'#Dg'#DgOOQO'#Dh'#DhOOQO'#Di'#DiOOQO'#Dj'#DjOOQO'#Dk'#DkOOQO'#Dl'#DlOOQO'#Dm'#DmOOQO'#Dn'#DnOOQO'#Do'#DoOOQO'#Dp'#DpOOQO'#Dq'#DqOOQO'#Dr'#DrOOQO'#Ds'#DsOOQO'#Dt'#DtOOQO'#Du'#DuOOQO'#Dv'#DvOOQO'#Dw'#DwOOQO'#Dx'#DxOOQO'#Dy'#DyOOQO'#Dz'#DzOOQO'#D{'#D{OOQO'#D|'#D|OOQO'#D}'#D}OOQO'#EO'#EOOOQO'#EP'#EPOOQO'#EQ'#EQOOQO'#ER'#EROOQO'#ES'#ESOOQO'#ET'#ETOOQO'#EU'#EUOOQO'#EV'#EVOOQO'#EW'#EWOOQO'#EX'#EXOOQO'#EY'#EYOOQO'#EZ'#EZOOQO'#E['#E[OOQO'#E]'#E]OOQO'#E^'#E^OOQO'#E_'#E_OOQO'#E`'#E`OOQO'#Ea'#EaOOQO'#Eb'#EbOOQO'#Ec'#EcOOQO'#Ed'#EdOOQO'#Ee'#EeOOQO'#Ef'#EfOOQO'#Eg'#EgOOQO'#Eh'#EhOOQO'#Ei'#EiOOQO'#Ej'#EjOOQO'#Ek'#EkOOQO'#El'#ElOOQO'#Em'#EmOOQO'#En'#EnOOQO'#Eo'#EoOOQO'#Ep'#EpOOQO'#Eq'#EqOOQO'#Er'#ErOOQO'#Es'#EsOOQO'#Et'#EtOOQO'#Eu'#EuOOQO'#Ev'#EvOOQO'#Ew'#EwOOQO'#Ex'#ExOOQO'#Ey'#EyOOQO'#Ez'#EzOOQO'#E{'#E{OOQO'#E|'#E|OOQO'#E}'#E}OOQO'#FO'#FOOOQO'#FP'#FPOOQO'#FQ'#FQOOQO'#FR'#FROOQO'#FS'#FSOOQO'#FT'#FTOOQO'#FU'#FUOOQO'#FV'#FVOOQO'#FW'#FWOOQO'#FX'#FXOOQO'#FY'#FYQOQPOOO2`QPO'#C{O2eQPO'#DQO(YQPO,59eO2lQQO,59eO4YQPO,59mO4YQPO,59mO4YQPO,59mO4YQPO,59mO4YQPO,59mO;WQQO,5;uO;]QQO,5;xO;eQPO,5<VOOQO,59|,59|OOQO,5;w,5;wO;|QQO,5;yO<TQQO,5;{OOQO'#DO'#DOO=kQPO'#FeO=yQPO,5<OOOQO,5<O,5<OO>VQPO,5<OOOQO,5;},5;}O>_QSO'#C|OOQO,59g,59gOOQO,59l,59lO>jQQO,59lOOQO1G/P1G/POOQO'#DT'#DTO2`QPO'#DUOOQO'#F{'#F{O>tQPO'#F{OYQPO1G/XOYQPO1G/XOYQPO1G/XOYQPO1G/XOYQPO1G/XOEoQSO1G1aOOQO1G1d1G1dOEwQQO1G1dOE|QPO'#F]OOQO'#Fm'#FmOOQO1G1q1G1qOFXQPO1G1qOOQO1G1e1G1eOOQO'#Ff'#FfOF^QPO,5<POFcQPO,5<UOFhQSO1G1jOFsQPO1G1jOOQO1G1j1G1jOOQO,59h,59hOF{QPO,59hOYQPO'#FpOGTQPO1G/WOOQO1G/W1G/WOG]QPO,59pOOQO,5<g,5<gO! bQQO7+$sO! rQQO7+$sO!#WQQO7+$sO!#nQQO7+$sO!%VQQO7+$sOOQO7+&{7+&{O!%pQQO7+'QOOQO7+'O7+'OO!%xQPO7+']OOQO1G1k1G1kOOQO1G1p1G1pO!%}QPO,5<]OOQO,5<],5<]OOQO7+'U7+'UO!&cQSO7+'UOOQO-E9o-E9oO!&nQSO1G/SO!&yQPO1G/SOOQO1G/S1G/SO!'RQQO,5<[OOQO-E9n-E9nOOQO7+$r7+$rO!']QPO1G/[OOQO<<Jl<<JlO!.QQPO<<JlOOQO<<Jw<<JwOOQO<<Jp<<JpP!.VQSO'#FqOOQO,5<Z,5<ZOOQO7+$n7+$nO!._QSO7+$nOOQO-E9m-E9mOOQO7+$v7+$vOOQOAN@WAN@WOOQO<<HY<<HYP!.jQSO'#Fo",
  stateData: "!.r~O$jOSkOS~OWQOXQOYQOZQO[QO]QO^QO_QO`QOaQObQOcQOs^O!X[O$gVO$hVO$lXO$p_O$q`O$raO$sbO$tcO$udO$veO$wfO$xgO$yhO$ziO${jO$|kO$}lO%OmO%PnO%QoO%RpO%SqO%TrO%UsO%VtO%WuO%XvO%YwO%ZxO%[yO%]zO%^{O%_|O%`}O%a!OO%b!PO%c!QO%d!RO%e!SO%f!TO%g!UO%h!VO%i!WO%j!XO%k!YO%l!ZO%m![O%n!]O%o!^O%p!_O%q!`O%r!aO%s!bO%t!cO%u!dO%v!eO%w!fO%x!gO%y!hO%z!iO%{!jO%|!kO%}!lO&O!mO&P!nO&Q!oO&R!pO&S!qO&T!rO&U!sO&V!tO&W!uO&X!vO&Y!wO&Z!xO&[!yO&]!zO&^!{O&_!|O&`!}O&a#OO&b#PO&c#QO&d#RO&e#SO&hWO&iWO&jVO&lZO~O!X#TO~Od#UOe#UO$l#VO~OU#`OV#YOf#]Og#^Oh#]Ov#YOy#YOz#YO{#YO|#ZO}#ZO!O#[O!P#[O!Q#[O!R#[O!S#[O!T#[O$`#aO&f#_O~O$g#cO$h#cO&j#cOW$UXX$UXY$UXZ$UX[$UX]$UX^$UX_$UX`$UXa$UXb$UXc$UXs$UX!X$UX$g$UX$h$UX$l$UX$p$UX$q$UX$r$UX$s$UX$t$UX$u$UX$v$UX$w$UX$x$UX$y$UX$z$UX${$UX$|$UX$}$UX%O$UX%P$UX%Q$UX%R$UX%S$UX%T$UX%U$UX%V$UX%W$UX%X$UX%Y$UX%Z$UX%[$UX%]$UX%^$UX%_$UX%`$UX%a$UX%b$UX%c$UX%d$UX%e$UX%f$UX%g$UX%h$UX%i$UX%j$UX%k$UX%l$UX%m$UX%n$UX%o$UX%p$UX%q$UX%r$UX%s$UX%t$UX%u$UX%v$UX%w$UX%x$UX%y$UX%z$UX%{$UX%|$UX%}$UX&O$UX&P$UX&Q$UX&R$UX&S$UX&T$UX&U$UX&V$UX&W$UX&X$UX&Y$UX&Z$UX&[$UX&]$UX&^$UX&_$UX&`$UX&a$UX&b$UX&c$UX&d$UX&e$UX&h$UX&i$UX&j$UX&l$UX~Oq#gOs#fO&m#iO~O&lZOU$VXV$VXf$VXg$VXh$VXv$VXy$VXz$VX{$VX|$VX}$VX!O$VX!P$VX!Q$VX!R$VX!S$VX!T$VX$`$VX$f$VX&f$VX$n$VX$m$VX~O$l#lO~O$n#nO~PYOd#UOe#UOUmaVmafmagmahmavmaymazma{ma|ma}ma!Oma!Pma!Qma!Rma!Sma!Tma$`ma$fma&fma$nma$mma~OP#qOQ#rOR#rOW$oPX$oPY$oPZ$oP[$oP]$oP^$oP_$oP`$oPa$oPb$oPc$oPs$oP!X$oP$g$oP$h$oP$l$oP$p$oP$q$oP$r$oP$s$oP$t$oP$u$oP$v$oP$w$oP$x$oP$y$oP$z$oP${$oP$|$oP$}$oP%O$oP%P$oP%Q$oP%R$oP%S$oP%T$oP%U$oP%V$oP%W$oP%X$oP%Y$oP%Z$oP%[$oP%]$oP%^$oP%_$oP%`$oP%a$oP%b$oP%c$oP%d$oP%e$oP%f$oP%g$oP%h$oP%i$oP%j$oP%k$oP%l$oP%m$oP%n$oP%o$oP%p$oP%q$oP%r$oP%s$oP%t$oP%u$oP%v$oP%w$oP%x$oP%y$oP%z$oP%{$oP%|$oP%}$oP&O$oP&P$oP&Q$oP&R$oP&S$oP&T$oP&U$oP&V$oP&W$oP&X$oP&Y$oP&Z$oP&[$oP&]$oP&^$oP&_$oP&`$oP&a$oP&b$oP&c$oP&d$oP&e$oP&h$oP&i$oP&j$oP&l$oP~O$O#zO~O}#|O$O#{O~Oi$OOj$OO$gVO$hVO&h#}O&i#}O&jVO~O$n$RO~P(_Ov#YOU$TaV$Taf$Tag$Tah$Tay$Taz$Ta{$Ta|$Ta}$Ta!O$Ta!P$Ta!Q$Ta!R$Ta!S$Ta!T$Ta$`$Ta$f$Ta&f$Ta$n$Ta$m$Ta~O!T$SO$Z$SO$[$SO$]$SO~O!T$SO$Z$SO$[$SO$]$SO$m$VO&m$XO~Oq$ZOs#fO$n$YO~O$m$[O$n$^O~P(_OQ#rOR#rOW$oXX$oXY$oXZ$oX[$oX]$oX^$oX_$oX`$oXa$oXb$oXc$oXs$oX!X$oX$g$oX$h$oX$l$oX$p$oX$q$oX$r$oX$s$oX$t$oX$u$oX$v$oX$w$oX$x$oX$y$oX$z$oX${$oX$|$oX$}$oX%O$oX%P$oX%Q$oX%R$oX%S$oX%T$oX%U$oX%V$oX%W$oX%X$oX%Y$oX%Z$oX%[$oX%]$oX%^$oX%_$oX%`$oX%a$oX%b$oX%c$oX%d$oX%e$oX%f$oX%g$oX%h$oX%i$oX%j$oX%k$oX%l$oX%m$oX%n$oX%o$oX%p$oX%q$oX%r$oX%s$oX%t$oX%u$oX%v$oX%w$oX%x$oX%y$oX%z$oX%{$oX%|$oX%}$oX&O$oX&P$oX&Q$oX&R$oX&S$oX&T$oX&U$oX&V$oX&W$oX&X$oX&Y$oX&Z$oX&[$oX&]$oX&^$oX&_$oX&`$oX&a$oX&b$oX&c$oX&d$oX&e$oX&h$oX&i$oX&j$oX&l$oX~O&g$fO&k$gO~O$O$hO~O$g#cO$h#cO&j#cO~O$l$iO~Os$jO~Os$kO~Oq#gOs#fO&m$nO~O$m$oO&m$nO~O$m$qO$n$sO~O$m$[O$n$vO~OS$wOT$wOWxaXxaYxaZxa[xa]xa^xa_xa`xaaxabxacxasxa!Xxa$gxa$hxa$lxa$pxa$qxa$rxa$sxa$txa$uxa$vxa$wxa$xxa$yxa$zxa${xa$|xa$}xa%Oxa%Pxa%Qxa%Rxa%Sxa%Txa%Uxa%Vxa%Wxa%Xxa%Yxa%Zxa%[xa%]xa%^xa%_xa%`xa%axa%bxa%cxa%dxa%exa%fxa%gxa%hxa%ixa%jxa%kxa%lxa%mxa%nxa%oxa%pxa%qxa%rxa%sxa%txa%uxa%vxa%wxa%xxa%yxa%zxa%{xa%|xa%}xa&Oxa&Pxa&Qxa&Rxa&Sxa&Txa&Uxa&Vxa&Wxa&Xxa&Yxa&Zxa&[xa&]xa&^xa&_xa&`xa&axa&bxa&cxa&dxa&exa&hxa&ixa&jxa&lxa~Ov#YOUuqfuqguqhuq|uq}uq!Ouq!Puq!Quq!Ruq!Suq!Tuq$`uq$fuq&fuq$nuq$muq~OVuqyuqzuq{uq~PNWOV#YOy#YOz#YO{#YO~PNWOV#YOv#YOy#YOz#YO{#YO|#ZO}#ZOUuqfuqguqhuq$`uq$fuq&fuq$nuq$muq~O!Ouq!Puq!Quq!Ruq!Suq!Tuq~P!!SO!O#[O!P#[O!Q#[O!R#[O!S#[O!T#[O~P!!SOV#YOf#]Oh#]Ov#YOy#YOz#YO{#YO|#ZO}#ZO!O#[O!P#[O!Q#[O!R#[O!S#[O!T#[O~OUuqguq$`uq$fuq&fuq$nuq$muq~P!$UO$O$yO&g$xO~O$n$zO~O!T$SO$Z$SO$[$SO$]$SO$m$ea&m$ea~Oq#gOs#fO&m${O~Oq$}Os#fO$n%OO~O$m%PO$n%OO~O$m$da$n$da~P(_O$l#lOWxiXxiYxiZxi[xi]xi^xi_xi`xiaxibxicxisxi!Xxi$gxi$hxi$pxi$qxi$rxi$sxi$txi$uxi$vxi$wxi$xxi$yxi$zxi${xi$|xi$}xi%Oxi%Pxi%Qxi%Rxi%Sxi%Txi%Uxi%Vxi%Wxi%Xxi%Yxi%Zxi%[xi%]xi%^xi%_xi%`xi%axi%bxi%cxi%dxi%exi%fxi%gxi%hxi%ixi%jxi%kxi%lxi%mxi%nxi%oxi%pxi%qxi%rxi%sxi%txi%uxi%vxi%wxi%xxi%yxi%zxi%{xi%|xi%}xi&Oxi&Pxi&Qxi&Rxi&Sxi&Txi&Uxi&Vxi&Wxi&Xxi&Yxi&Zxi&[xi&]xi&^xi&_xi&`xi&axi&bxi&cxi&dxi&exi&hxi&ixi&jxi&lxi~O&g%SO~Oq#gOs#fO~Oq$}Os#fO$n%TO~Oq$}Os#fO~O",
  goto: ")p$pPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$q$}%Z%aP%jP%z$qP&T&[PPPPPPPPPPP$q&f&rP&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r&r$qP'O$q$q$q$q'_$q'k'z(SPPP'z$qP(ZP(^(d(jPPPPP(qPPP)ae^OXY#V#u#v#w#x#y$[eROXY#V#u#v#w#x#y$[Q#WRR#p#XQ#m#UQ$_#rR%R$wQ#hZQ$Z#lU$l$V$o$|V$}$q%P%UQ#XRQ#bUR#p#WZ#t#Y#Z#[#]#^Y#s#Y#Z#[#]#^R$`#teUOXY#V#u#v#w#x#y$[eTOXY#V#u#v#w#x#y$[d^OXY#V#u#v#w#x#y$[R$P#aeYOXY#V#u#v#w#x#y$[d]OXY#V#u#v#w#x#y$[R#k[Q#jZV$m$V$o$|Q$T#gT$U#h$lR$Q#aQ$r$ZR%Q$rQ$]#oR$u$]S$W#h#jR$p$WQSOQ#dXQ#eYQ#o#VQ$a#uQ$b#vQ$c#wQ$d#xQ$e#yR$t$[Q#u#YQ#v#ZQ#w#[Q#x#]R#y#^",
  nodeNames: "⚠ Bool Ignoring On GroupLeft GroupRight Offset Atan2 Avg Bottomk Count CountValues Group Max Min Quantile Stddev Stdvar Sum Topk By Without And Or Unless Start End LineComment PromQL AggregateExpr AggregateOp AggregateModifier GroupingLabels LabelName QuotedLabelName StringLiteral FunctionCallBody BinaryExpr Pow BoolModifier MatchingModifierClause Mul Div Mod Add Sub Eql Gte Gtr Lte Lss Neq FunctionCall FunctionIdentifier AbsentOverTime Identifier Absent Abs Acos Acosh Asin Asinh Atan Atanh AvgOverTime Ceil Changes Clamp ClampMax ClampMin Cos Cosh CountOverTime DaysInMonth DayOfMonth DayOfWeek DayOfYear Deg Delta Deriv Exp Floor HistogramCount HistogramFraction HistogramQuantile HistogramStdDev HistogramStdVar HistogramSum HistogramAvg HoltWinters Hour Idelta Increase Irate LabelReplace LabelJoin LastOverTime Ln Log10 Log2 MadOverTime MaxOverTime MinOverTime Minute Month Pi PredictLinear PresentOverTime QuantileOverTime Rad Rate Resets Round Scalar Sgn Sin Sinh Sort SortDesc SortByLabel SortByLabelDesc Sqrt StddevOverTime StdvarOverTime OPDefined OKDefined OPReplaceNone OKReplaceNone OPZeroIfNone OKZeroIfNone SumOverTime Tan Tanh Timestamp Time Vector Year MatrixSelector Duration NumberLiteral OffsetExpr ParenExpr SubqueryExpr UnaryExpr UnaryOp VectorSelector LabelMatchers UnquotedLabelMatcher MatchOp EqlSingle EqlRegex NeqRegex QuotedLabelMatcher StepInvariantExpr At AtModifierPreprocessors MetricName",
  maxTerm: 259,
  nodeProps: [
    ["group", -12,29,35,37,52,137,139,140,141,142,143,145,153,"Expr"]
  ],
  propSources: [promQLHighLight],
  skippedNodes: [0,27],
  repeatNodeCount: 3,
  tokenData: "3s~RwX^#lpq#lqr$ars$tst&luv'Twx'Yxy({yz)Qz{)V{|)[|})c}!O)h!O!P)o!P!Q*o!Q!R*t!R![+l![!]0W!^!_1S!_!`1a!`!a1v!b!c2T!c!}2Y!}#O2p#P#Q2u#Q#R2z#R#S2Y#S#T3P#T#o2Y#o#p3i#q#r3n#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~#qY$j~X^#lpq#l#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~$dQ!_!`$j#r#s$o~$oO!T~~$tO$]~~$yWs~OY$tZr$trs%cs#O$t#O#P%h#P;'S$t;'S;=`&f<%lO$t~%hOs~~%kRO;'S$t;'S;=`%t;=`O$t~%yXs~OY$tZr$trs%cs#O$t#O#P%h#P;'S$t;'S;=`&f;=`<%l$t<%lO$t~&iP;=`<%l$t~&qSk~OY&lZ;'S&l;'S;=`&}<%lO&l~'QP;=`<%l&l~'YO{~~'_Ws~OY'YZw'Ywx%cx#O'Y#O#P'w#P;'S'Y;'S;=`(u<%lO'Y~'zRO;'S'Y;'S;=`(T;=`O'Y~(YXs~OY'YZw'Ywx%cx#O'Y#O#P'w#P;'S'Y;'S;=`(u;=`<%l'Y<%lO'Y~(xP;=`<%l'Y~)QO$l~~)VO$n~~)[Oy~R)cO&iP|Q~)hO$m~R)oO&hP}QP)rP!Q![)uP)zR&jP!Q![)u!g!h*T#X#Y*TP*WR{|*a}!O*a!Q![*gP*dP!Q![*gP*lP&jP!Q![*g~*tOz~R*yZ&jP!O!P)u!Q![+l!g!h*T#W#X,a#X#Y*T#[#],x#a#b-^#g#h.Q#k#l.c#l#m/l#m#n.}R+qY&jP!O!P)u!Q![+l!g!h*T#W#X,a#X#Y*T#[#],x#a#b-^#g#h.Q#k#l.c#m#n.}Q,fP$OQ!Q![,iQ,lS!Q![,i#[#],x#a#b-^#g#h.QQ,}P$OQ!Q![-QQ-TR!Q![-Q#a#b-^#g#h.QQ-cQ$OQ!Q![-i#g#h-{Q-lR!Q![-i#a#b-u#g#h.QQ-xP#g#h-{Q.QO$OQQ.VP$OQ!Q![.YQ.]Q!Q![.Y#a#b-uQ.hP$OQ!Q![.kQ.nT!Q![.k#W#X,a#[#],x#a#b-^#g#h.QQ/SP$OQ!Q![/VQ/YU!Q![/V#W#X,a#[#],x#a#b-^#g#h.Q#k#l.cP/oR!Q![/x!c!i/x#T#Z/xP/}R&jP!Q![/x!c!i/x#T#Z/xV0_T&kS!XR!Q![0n![!]0n!c!}0n#R#S0n#T#o0nR0sT!XR!Q![0n![!]0n!c!}0n#R#S0n#T#o0n~1XP!S~!_!`1[~1aO!R~~1fQ$ZP!_!`1l#r#s1qQ1qO!OQ~1vO$[~~1{P!Q~!_!`2O~2TO!P~~2YO$`~V2aT!XRqS!Q![2Y![!]0n!c!}2Y#R#S2Y#T#o2Y~2uO&f~~2zO&g~~3POv~~3STO#S3P#S#T%c#T;'S3P;'S;=`3c<%lO3P~3fP;=`<%l3P~3nO&l~~3sO&m~",
  tokenizers: [0, 1, 2],
  topRules: {"PromQL":[0,28],"MetricName":[1,156]},
  specialized: [{term: 55, get: (value, stack) => (specializeIdentifier(value) << 1), external: specializeIdentifier},{term: 55, get: (value, stack) => (extendIdentifier(value) << 1) | 1, external: extendIdentifier, extend: true},{term: 55, get: (value) => spec_Identifier[value] || -1}],
  tokenPrec: 0
});
// This file was generated by lezer-generator. You probably shouldn't edit it.
const inf = 161,
  nan = 162,
  Bool = 1,
  Ignoring = 2,
  On = 3,
  GroupLeft = 4,
  GroupRight = 5,
  Offset = 6,
  Atan2 = 7,
  Avg = 8,
  Bottomk = 9,
  Count = 10,
  CountValues = 11,
  Group = 12,
  Max = 13,
  Min = 14,
  Quantile = 15,
  Stddev = 16,
  Stdvar = 17,
  Sum = 18,
  Topk = 19,
  By = 20,
  Without = 21,
  And = 22,
  Or = 23,
  Unless = 24,
  Start = 25,
  End = 26,
  LineComment = 27,
  PromQL = 28,
  AggregateExpr = 29,
  AggregateOp = 30,
  AggregateModifier = 31,
  GroupingLabels = 32,
  LabelName = 33,
  QuotedLabelName = 34,
  StringLiteral = 35,
  FunctionCallBody = 36,
  BinaryExpr = 37,
  Pow = 38,
  BoolModifier = 39,
  MatchingModifierClause = 40,
  Mul = 41,
  Div = 42,
  Mod = 43,
  Add = 44,
  Sub = 45,
  Eql = 46,
  Gte = 47,
  Gtr = 48,
  Lte = 49,
  Lss = 50,
  Neq = 51,
  FunctionCall = 52,
  FunctionIdentifier = 53,
  AbsentOverTime = 54,
  Identifier = 55,
  Absent = 56,
  Abs = 57,
  Acos = 58,
  Acosh = 59,
  Asin = 60,
  Asinh = 61,
  Atan = 62,
  Atanh = 63,
  AvgOverTime = 64,
  Ceil = 65,
  Changes = 66,
  Clamp = 67,
  ClampMax = 68,
  ClampMin = 69,
  Cos = 70,
  Cosh = 71,
  CountOverTime = 72,
  DaysInMonth = 73,
  DayOfMonth = 74,
  DayOfWeek = 75,
  DayOfYear = 76,
  Deg = 77,
  Delta = 78,
  Deriv = 79,
  Exp = 80,
  Floor = 81,
  HistogramCount = 82,
  HistogramFraction = 83,
  HistogramQuantile = 84,
  HistogramStdDev = 85,
  HistogramStdVar = 86,
  HistogramSum = 87,
  HistogramAvg = 88,
  HoltWinters = 89,
  Hour = 90,
  Idelta = 91,
  Increase = 92,
  Irate = 93,
  LabelReplace = 94,
  LabelJoin = 95,
  LastOverTime = 96,
  Ln = 97,
  Log10 = 98,
  Log2 = 99,
  MadOverTime = 100,
  MaxOverTime = 101,
  MinOverTime = 102,
  Minute = 103,
  Month = 104,
  Pi = 105,
  PredictLinear = 106,
  PresentOverTime = 107,
  QuantileOverTime = 108,
  Rad = 109,
  Rate = 110,
  Resets = 111,
  Round = 112,
  Scalar = 113,
  Sgn = 114,
  Sin = 115,
  Sinh = 116,
  Sort = 117,
  SortDesc = 118,
  SortByLabel = 119,
  SortByLabelDesc = 120,
  Sqrt = 121,
  StddevOverTime = 122,
  StdvarOverTime = 123,
  OPDefined = 124,
  OKDefined = 125,
  OPReplaceNone = 126,
  OKReplaceNone = 127,
  OPZeroIfNone = 128,
  OKZeroIfNone = 129,
  SumOverTime = 130,
  Tan = 131,
  Tanh = 132,
  Timestamp = 133,
  Time = 134,
  Vector = 135,
  Year = 136,
  MatrixSelector = 137,
  Duration = 138,
  NumberLiteral = 139,
  OffsetExpr = 140,
  ParenExpr = 141,
  SubqueryExpr = 142,
  UnaryExpr = 143,
  UnaryOp = 144,
  VectorSelector = 145,
  LabelMatchers = 146,
  UnquotedLabelMatcher = 147,
  MatchOp = 148,
  EqlSingle = 149,
  EqlRegex = 150,
  NeqRegex = 151,
  QuotedLabelMatcher = 152,
  StepInvariantExpr = 153,
  At = 154,
  AtModifierPreprocessors = 155,
  MetricName = 156;

exports.Abs = Abs;
exports.Absent = Absent;
exports.AbsentOverTime = AbsentOverTime;
exports.Acos = Acos;
exports.Acosh = Acosh;
exports.Add = Add;
exports.AggregateExpr = AggregateExpr;
exports.AggregateModifier = AggregateModifier;
exports.AggregateOp = AggregateOp;
exports.And = And;
exports.Asin = Asin;
exports.Asinh = Asinh;
exports.At = At;
exports.AtModifierPreprocessors = AtModifierPreprocessors;
exports.Atan = Atan;
exports.Atan2 = Atan2;
exports.Atanh = Atanh;
exports.Avg = Avg;
exports.AvgOverTime = AvgOverTime;
exports.BinaryExpr = BinaryExpr;
exports.Bool = Bool;
exports.BoolModifier = BoolModifier;
exports.Bottomk = Bottomk;
exports.By = By;
exports.Ceil = Ceil;
exports.Changes = Changes;
exports.Clamp = Clamp;
exports.ClampMax = ClampMax;
exports.ClampMin = ClampMin;
exports.Cos = Cos;
exports.Cosh = Cosh;
exports.Count = Count;
exports.CountOverTime = CountOverTime;
exports.CountValues = CountValues;
exports.DayOfMonth = DayOfMonth;
exports.DayOfWeek = DayOfWeek;
exports.DayOfYear = DayOfYear;
exports.DaysInMonth = DaysInMonth;
exports.Deg = Deg;
exports.Delta = Delta;
exports.Deriv = Deriv;
exports.Div = Div;
exports.Duration = Duration;
exports.End = End;
exports.Eql = Eql;
exports.EqlRegex = EqlRegex;
exports.EqlSingle = EqlSingle;
exports.Exp = Exp;
exports.Floor = Floor;
exports.FunctionCall = FunctionCall;
exports.FunctionCallBody = FunctionCallBody;
exports.FunctionIdentifier = FunctionIdentifier;
exports.Group = Group;
exports.GroupLeft = GroupLeft;
exports.GroupRight = GroupRight;
exports.GroupingLabels = GroupingLabels;
exports.Gte = Gte;
exports.Gtr = Gtr;
exports.HistogramAvg = HistogramAvg;
exports.HistogramCount = HistogramCount;
exports.HistogramFraction = HistogramFraction;
exports.HistogramQuantile = HistogramQuantile;
exports.HistogramStdDev = HistogramStdDev;
exports.HistogramStdVar = HistogramStdVar;
exports.HistogramSum = HistogramSum;
exports.HoltWinters = HoltWinters;
exports.Hour = Hour;
exports.Idelta = Idelta;
exports.Identifier = Identifier;
exports.Ignoring = Ignoring;
exports.Increase = Increase;
exports.Irate = Irate;
exports.LabelJoin = LabelJoin;
exports.LabelMatchers = LabelMatchers;
exports.LabelName = LabelName;
exports.LabelReplace = LabelReplace;
exports.LastOverTime = LastOverTime;
exports.LineComment = LineComment;
exports.Ln = Ln;
exports.Log10 = Log10;
exports.Log2 = Log2;
exports.Lss = Lss;
exports.Lte = Lte;
exports.MadOverTime = MadOverTime;
exports.MatchOp = MatchOp;
exports.MatchingModifierClause = MatchingModifierClause;
exports.MatrixSelector = MatrixSelector;
exports.Max = Max;
exports.MaxOverTime = MaxOverTime;
exports.MetricName = MetricName;
exports.Min = Min;
exports.MinOverTime = MinOverTime;
exports.Minute = Minute;
exports.Mod = Mod;
exports.Month = Month;
exports.Mul = Mul;
exports.Neq = Neq;
exports.NeqRegex = NeqRegex;
exports.NumberLiteral = NumberLiteral;
exports.OKDefined = OKDefined;
exports.OKReplaceNone = OKReplaceNone;
exports.OKZeroIfNone = OKZeroIfNone;
exports.OPDefined = OPDefined;
exports.OPReplaceNone = OPReplaceNone;
exports.OPZeroIfNone = OPZeroIfNone;
exports.Offset = Offset;
exports.OffsetExpr = OffsetExpr;
exports.On = On;
exports.Or = Or;
exports.ParenExpr = ParenExpr;
exports.Pi = Pi;
exports.Pow = Pow;
exports.PredictLinear = PredictLinear;
exports.PresentOverTime = PresentOverTime;
exports.PromQL = PromQL;
exports.Quantile = Quantile;
exports.QuantileOverTime = QuantileOverTime;
exports.QuotedLabelMatcher = QuotedLabelMatcher;
exports.QuotedLabelName = QuotedLabelName;
exports.Rad = Rad;
exports.Rate = Rate;
exports.Resets = Resets;
exports.Round = Round;
exports.Scalar = Scalar;
exports.Sgn = Sgn;
exports.Sin = Sin;
exports.Sinh = Sinh;
exports.Sort = Sort;
exports.SortByLabel = SortByLabel;
exports.SortByLabelDesc = SortByLabelDesc;
exports.SortDesc = SortDesc;
exports.Sqrt = Sqrt;
exports.Start = Start;
exports.Stddev = Stddev;
exports.StddevOverTime = StddevOverTime;
exports.Stdvar = Stdvar;
exports.StdvarOverTime = StdvarOverTime;
exports.StepInvariantExpr = StepInvariantExpr;
exports.StringLiteral = StringLiteral;
exports.Sub = Sub;
exports.SubqueryExpr = SubqueryExpr;
exports.Sum = Sum;
exports.SumOverTime = SumOverTime;
exports.Tan = Tan;
exports.Tanh = Tanh;
exports.Time = Time;
exports.Timestamp = Timestamp;
exports.Topk = Topk;
exports.UnaryExpr = UnaryExpr;
exports.UnaryOp = UnaryOp;
exports.Unless = Unless;
exports.UnquotedLabelMatcher = UnquotedLabelMatcher;
exports.Vector = Vector;
exports.VectorSelector = VectorSelector;
exports.Without = Without;
exports.Year = Year;
exports.inf = inf;
exports.nan = nan;
exports.parser = parser;