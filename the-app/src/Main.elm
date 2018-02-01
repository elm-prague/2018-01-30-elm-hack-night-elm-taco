module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Http
import Json.Decode as Decode


-- Http


decodeData : Decode.Decoder String
decodeData =
    Decode.at [ "data", "image_url" ] Decode.string


getDataFromAPI : Int -> Cmd Msg
getDataFromAPI index =
    let
        url =
            "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dog"
    in
    Http.send (NewData index) (Http.get url decodeData)



---- MODEL ----


type alias Model =
    { inputValue : String
    , imageUrl : String
    , lastRequestIndex : Int
    }


init : ( Model, Cmd Msg )
init =
    ( { inputValue = "World"
      , imageUrl = ""
      , lastRequestIndex = 0
      }
    , Cmd.none
    )



---- UPDATE ----


type Msg
    = NoOp
    | OnInputChange String
    | NewData Int (Result Http.Error String)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        OnInputChange value ->
            let
                nextRequestIndex =
                    1 + model.lastRequestIndex
            in
            ( { model
                | inputValue = value
                , lastRequestIndex = nextRequestIndex
              }
            , getDataFromAPI nextRequestIndex
            )

        NewData index (Ok imageUrl) ->
            if index == model.lastRequestIndex then
                ( { model | imageUrl = imageUrl }, Cmd.none )
            else
                ( model, Cmd.none )

        NewData _ (Err _) ->
            ( model, Cmd.none )



---- VIEW ----


funnyImage : String -> Html msg
funnyImage url =
    div []
        [ h3 [] [ text "Funny image is:" ]
        , img [ src url ] []
        ]


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text ("Hello, " ++ model.inputValue ++ "!") ]
        , input [ onInput OnInputChange ] []
        , ul []
            [ li [] [ text "123" ]
            , li [] [ text "abc" ]
            , li [] [ text "123" ]
            ]
        , funnyImage model.imageUrl
        ]



---- PROGRAM ----


main : Program Never Model Msg
main =
    Html.program
        { view = view
        , init = init
        , update = update
        , subscriptions = always Sub.none
        }
