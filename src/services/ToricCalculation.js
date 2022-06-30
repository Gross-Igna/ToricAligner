import React from 'react';

export function getMeanRatio(AxialLength, K1, K2){
    
        //// CALCULATION FOR MERIDIONAL ANALYSIS AND IMPLANTED IOL CYL. ////
        //HOFFER Q = HofferIOLPwB - HofferIOLPwA
        //Corrected Axial Length
        let CorrAXL;
        if(AxialLength<18.5){
            CorrAXL = 18.5;
        }else{
            if(AxialLength<=31){
                CorrAXL = AxialLength;
            }else{
                CorrAXL = 31;
            }
        }
        //G
        let G;
        if(CorrAXL<23){
            G=28;
        }else{
            G=23.5;
        }
        //M
        let M;
        if(CorrAXL<23){
            M=1;
        }else{
            M=-1;
        }
        //Vertex
        let vertex = 12;
        //Desired RX
        let RX = 0;
        //Average K
        let AvgK = (parseFloat(K1)+parseFloat(K2))/2;
        //Personalized ACD = Hoffer Q
        let PerACD = 5.89;
        //Predicted ACD
        let PredACD = 
        PerACD + 0.3 * (CorrAXL-23.5) + Math.pow(Math.tan(AvgK*Math.PI/180),2) +
        (0.1 * M * Math.pow(23.5-CorrAXL,2) * 
        (Math.tan(0.1 * Math.pow(G-CorrAXL,2) * Math.PI / 180))) - 0.99166;
        
        
        
        //Calculate HofferIOLPwB: (K86)
        //K for HofferIOLPwB
        let KB = parseFloat(K2);
        //HofferIOLPwB
        let HofferIOLPwB =
        (1336/(AxialLength-PredACD-0.05)) - 
        (1.336/((1.336/(KB+RX/(1-0.001*vertex*RX))) - ((PredACD+0.05)/1000)))
        //Calculate HofferIOLPwA: (K85)
        //K for HofferIOLPwA
        let KA2 = parseFloat(K1);
        //HofferIOLPwA
        let HofferIOLPwA =
        (1336/(AxialLength-PredACD-0.05)) - 
        (1.336/((1.336/(KA2+RX/(1-0.001*vertex*RX))) - ((PredACD+0.05)/1000)));

        //Hoffer Q Final Result
        let HofferQ = HofferIOLPwB - HofferIOLPwA;

    

        //  HOLLADAY 1 = J92-J91  //
        let HolladayConstant = 2.11;
        //R
        let R1 = 337.5/AvgK;
        let R2 = 337.5/K1;
        let R3 = 337.5/K2;
        //AG
        let AG1;
        if(12.5*parseFloat(AxialLength)/23.45<13.5){
            AG1 = 12.5*parseFloat(AxialLength)/23.45;
        }else{
            AG1 = 13.5;
        }
        //ACD
        let ACD = 0.56+R1-Math.sqrt(Math.pow(R1,2)-Math.pow(AG1,2)/4);
        //Alm
        let Alm = parseFloat(AxialLength)+0.2;

        //HolladayIOLPw
        let HolladayIOLPwA = 1336*(1.336*R2-1/3*Alm-0.001*RX*(vertex*(1.336*R2-1/3*Alm)+Alm*R2))/
        ((Alm-ACD-HolladayConstant)*(1.336*R2-1/3*(ACD+HolladayConstant)-
        0.001*RX*(vertex*(1.336*R2-1/3*(ACD+HolladayConstant))+(ACD+HolladayConstant)*R2)));
        let HolladayIOLPwB = 1336*(1.336*R3-1/3*Alm-0.001*RX*(vertex*(1.336*R3-1/3*Alm)+Alm*R3))/
        ((Alm-ACD-HolladayConstant)*(1.336*R3-1/3*(ACD+HolladayConstant)-
        0.001*RX*(vertex*(1.336*R3-1/3*(ACD+HolladayConstant))+(ACD+HolladayConstant)*R3)));

        //Holladay 1
        let Holladay1 = HolladayIOLPwB-HolladayIOLPwA;



        //SRK/T = Q98-Q97
        //Radius
        let radius1 = R1;
        let radius2 = R2;
        let radius3 = R3;
        //LCOR
        let LCOR;
        if(AxialLength>24.2){
            LCOR = -3.446+1.716*parseFloat(AxialLength)-0.0237*Math.pow(parseFloat(AxialLength),2)
        }else{
            LCOR = parseFloat(AxialLength);
        }
        //Cw
        let Cw1 = -5.41+0.58412*LCOR+0.098*AvgK;
        //H
        let H1 = radius1-Math.sqrt(Math.pow(radius1,2)-Math.pow(Cw1,2)/4);
        //A-Constant
        let AConstant = 119.4;
        //ACD Const
        let ACDConst = 0.62467*AConstant-68.747;
        //ACDest
        let ACDest = H1+ACDConst-3.336;
        //na
        let na = 1.336;
        //ncm1
        let ncm1 = 0.333;
        //Rethick
        let Rethick = 0.65696-0.02029*parseFloat(AxialLength)
        //LOPT
        let LOPT = parseFloat(AxialLength)+Rethick;

        //IOL emme
        let IOLemmeA = (1000*na*(na*radius2-ncm1*LOPT))/((LOPT-ACDest)*(na*radius2-ncm1*ACDest));
        let IOLemmeB = (1000*na*(na*radius3-ncm1*LOPT))/((LOPT-ACDest)*(na*radius3-ncm1*ACDest))

        //SRK/T
        let SRKT = IOLemmeB-IOLemmeA;


        //MEAN = RESULT 1 = IOL/CORNEA CYLINDER RATIO
        //IMPLANTED IOL CYLINDER -> RESULT2
        let mean = (HofferQ+Holladay1+SRKT)/3
        let KA = K1-K2;
        let meanRatio = mean/KA;

        return meanRatio;
}