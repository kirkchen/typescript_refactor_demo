import IDiscounter from './idiscounter';
import VipDiscounter from './vipDiscounter';
import NormalDiscounter from './normalDiscounter';

export default class DiscounterFactory {
    static GetDiscounter(level: string): IDiscounter {
        let discounter: IDiscounter;
        
        if (level === 'VIP') {
            discounter = new VipDiscounter();
        }
        else if (level === 'Normal') {
            discounter = new NormalDiscounter();
        }

        return discounter!;
    }
}