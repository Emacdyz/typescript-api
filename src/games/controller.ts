// src/games/controller.ts
import { JsonController, Post, Body, Get, Param, NotFoundError, Put, HttpCode, BadRequestError } from 'routing-controllers'
import Game from './entity'
import { newGameColor, colorIsValid}  from './color'
import { moves } from './move'

@JsonController()
export default class GameController {
    @Get('/games/:id')
        getGame(
        @Param('id') id: number
    ){
        return Game.findOne(id)
    }
    @Get('/games')
    async allGames() {
        const games = await Game.find()
        return { games }
    }
    @Post('/games')
    @HttpCode(201)
    createNewGame(
        @Body() game: Game
    ) {
        // could also do: game.board = defaultBoard
        game.color = newGameColor();
        console.log(`New game created`)
        return game.save()
    }
    @Put('/games/:id')
    async updateGame(
        @Param('id') id: number,
        @Body() update: Partial<Game>,
    ) {
        const gameToUpdate = await Game.findOne(id)
        
        if (!gameToUpdate) throw new NotFoundError(`Game doesn't exist`)

        else if (update.color !== colorIsValid(update.color)) throw new BadRequestError ('Color not valid')

        else if (update.board && moves(update.board, gameToUpdate.board) > 1) throw new BadRequestError('Only one move per round is possible')

        else {
            return Game.merge(gameToUpdate, update).save()
        }
    }  
}



